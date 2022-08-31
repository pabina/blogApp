import express from "express";
import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import Post from "../models/Post.js";



const userRoute=express.Router();


//update
    userRoute.put("/:id",async(req,res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password){
            const salt= await bcrypt.genSalt(10);
            req.body.password= await bcrypt.hash(req.body.password,salt);
        }
  try {
    const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
    res.status(200).json(updateUser);
     
  } catch (error) {
    res.status(500).json(error);
  } }  else{
    res.status(409).json("you can not update other account");
  }
})

//delete
      userRoute.delete("/:id",async(req,res)=>{
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

//get  one user
 userRoute.get("/:id",async(req,res)=>{
 try {
  const user=await User.findById(req.params.id);
  const {password,...others}=user._doc;
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json(error);
 }
 })




export default userRoute;