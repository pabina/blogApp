import express from "express";
import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt"

const authRoute=express.Router();

//Register
authRoute.post("/register",async(req,res)=>{
  try {
    // const user=req.body;
    // const newUser=new User(user);
    // newUser.save(); 

//hasing password
const salt=await bcrypt.genSalt(10);
const hashedPass= await bcrypt.hash(req.body.password,salt);


    const newUser= new User({
      username:req.body.username,
      email:req.body.email, 
      password:hashedPass,
    }); 

    const user= await newUser.save(); 
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }  
})



//login

authRoute.post("/login",async(req,res)=>{
  try {
   const user=  await User.findOne({username:req.body.username})
   !user && res.status(400).json("wrong credentials! ");

  const validated=  bcrypt.compare(req.body.password,user.password)
  !validated &&res.status(400).json("wrong credentials! ");

  const{password,...other}=user._doc;
   res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
})
export default authRoute;