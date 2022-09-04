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
    if(post.username === req.body.username){
        try{
            const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});   
        
       res.status(200).json(updatedPost);
     
  } catch (error) {
    res.status(500).json(error);
  }
  }  else{
    res.status(401).json("you can  update only user post");
  }
}catch(error){
    res.status(400).json(error);
}})



//delete
postRoute.delete("/:id",async(req,res)=>{
       
  try {
   const post=await Post.findById(req.params.id);
    if(post.username === req.body.username){
        try{
            await Post.findByIdAndDelete(req.params.id);   
        
       res.status(200).json("post has been deleted");
     
  } catch (error) {
    res.status(500).json(error);
  }
  }  else{
    res.status(401).json("you can  delete only user post");
  }
}catch(error){
    res.status(400).json(error);
}})




//get  one post
 postRoute.get("/:id",async(req,res)=>{
 try {
  const post=await Post.findById(req.params.id);
  // const {password,...others}=post._doc;
  res.status(200).json(post);
 } catch (error) {
  res.status(500).json(error);
 }
 })

 //get all post
 postRoute.get("/",async(req,res)=>{
  const username=req.query.user;
  const catName=req.query.cat;
  try {
    let posts;
    if(username){
   posts=await Post.find({username:username});
  }else if(catName){
    posts=await Post.find({category:{
      $in:[catName]
    }
    })
  }else{
    posts= await Post.find();
  }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error)
  }
 })




export default postRoute;