import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async()=>{
   
    mongoose.set('strictQuery', true)

    if (isConnected){
        console.log('Mongodb is Connected');
        return;
    }

    try{

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        isConnected = true;

        console.log('MongoDB Connected')
    } catch(error){
        console.log(error)
    }
}