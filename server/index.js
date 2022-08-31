import express from "express";
import dotenv from 'dotenv';
import Connection from "./db/Db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/posts.js";




const app=express();
dotenv.config()


//middleware
app.use(express.json());



app.use("/api/auth",authRoute);

app.use("/api/users",userRoute);

app.use("/api/posts",postRoute);
 
app.use("/",(req,res)=>{
    console.log("hey this is main url");
})

Connection();

//listen to server
app.listen(process.env.PORT,()=>{
    console.log("server is working");
})
