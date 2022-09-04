import express, { application } from "express";
import dotenv from 'dotenv';
import Connection from "./db/Db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/posts.js";
import categoryRouter from "./routes/category.js";
import multer from "multer";



const app=express();
dotenv.config()


//middleware
app.use(express.json());




 


Connection();

// const Storage= multer.diskStorage({
//     destination:(req,file,cb)=>{
//     cb(null,'images/')    
//     },filename:(req,file,cb)=>{
//       cb(null,"hello.jpg")  
//     }
// })

const Storage=multer.diskStorage({
  destination:function(req,file,cb){
    var dest="images/" ;
    cb(null,dest)
  }  
})

const upload=multer({Storage:Storage});

// app.post("/api/upload",upload.single("file"),(req,res)=>{
//  res.status(200).json("file has been uploaded");   
// })
app.post("/api/upload",upload.fields([{name:"file"}]),function(req,res,next){
    // console.log("files",res.files.file);
    // console.log("body",req.body);
    console.log("file has been upload");
});

app.use("/",(req,res)=>{
    console.log("hey this is main url");
})

app.use("/api/auth",authRoute);

app.use("/api/users",userRoute);

app.use("/api/posts",postRoute);

app.use("/api/category",categoryRouter);
//listen to server
app.listen(process.env.PORT,()=>{
    console.log("server is working");
})
