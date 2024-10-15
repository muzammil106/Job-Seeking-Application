import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"MERN_STACK_JOB_SEEKING"
}).then(()=>{
    console.log("Connected to dataBase!")
}).catch((err)=>{
    console.log(`Some error occured while connecting to database!:${err}`)
   
})
}

