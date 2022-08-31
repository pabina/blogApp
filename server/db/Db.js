// import mongoose from "mongoose";


   
//    const Connection=()=>{
//     mongoose.connect(process.env.MONGO_DB,{
//         useNewUrlParser: true,
//         // useFindAndModify: false,
//         useUnifiedTopology: true
//       })
//       console.log("successfully connected to database");
//   }

//   export default Connection;



  import mongoose from "mongoose";
  import dotenv from "dotenv"
  const url=`mongodb://localhost:27017/blogApp`;
const Connection= ()=>{

 mongoose.connect(url,{useunifiedTopology:true,useNewurlparser:true})
 console.log("database connected");
}

export default Connection;

