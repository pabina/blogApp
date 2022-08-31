import express from "express";
import { Router } from "express";
import User from "../models/User.js";

import Post from "../models/Post.js";



const postRoute=express.Router();


//create new post
postRoute.post("/",async(req,res)=>{
    const newPost=  new Post(req.body);
    try {
     const savePost= await newPost.save(); 
     res.status(200).json(savePost) ; 
    } catch (error) {
      res.status(500).json(error)  
    }
})



//update
    postRoute.put("/:id",async(req,res)=>{
       
  try {
   const post=await Post.findById(req.params.id);
    if(post.body.username === req.body.username){
        try{
            const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});   
        
    res.status(200).json(updatedPost);
     
  } catch (error) {
    res.status(500).json(error);
  }
  }  else{
    res.status(409).json("you can  update only user post");
  }
}catch(error){
    res.status(400).json(error);
}})



//delete
      postRoute.delete("/:id",async(req,res)=>{
  if(req.body.userId === req.params.id){
    try {
      const user =await User.findById(req.params.id); 
try {
  await Post.deleteMany({username:user.username})
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json("user has been deleted");
}
catch (error) {
  res.status(500).json(error);  
  }} 
  catch (error) {
  res.status(404).json("user not found!");
} }  else{
  res.status(409).json("you can not delete other account");
}
})

//get  one post
 postRoute.get("/:id",async(req,res)=>{
 try {
  const user=await User.findById(req.params.id);
  const {password,...others}=user._doc;
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json(error);
 }
 })




export default postRoute;