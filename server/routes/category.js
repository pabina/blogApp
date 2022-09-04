import express from "express";
import { Router } from "express";
import Category from "../models/Category.js"

const categoryRouter=express.Router();

categoryRouter.post("/",async(req,res)=>{
    const newCat= new Category(req.body);
    try {
        const savedCat=await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
       res.status(500).json(err); 
    }
})
export default categoryRouter;

