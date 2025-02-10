import dotenv from "dotenv";
import connectDB from "./database/index.js";
import { app } from "./app.js";



dotenv.config({
    path:'./env'
})







connectDB()
.then(()=>{app.on("error",(error)=>{
    console.log("ERRR:", error);
    throw error
})
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection error", err);
})






/*
import express from "express"

const app = express()

(async()=>{
    try{
      await mongoose.connnect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERRR:", error);
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port${process.env.PORT}`);
      })

    }catch(error){
        
            console.error("ERROR:", error)
            throw err
        }
    }
)()

*/