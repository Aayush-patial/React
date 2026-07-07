import mongoose from "mongoose";

const connectDb = async () =>{
    mongoose.connect("mongodb+srv://Aayush:Aayush@cluster0.kps8um0.mongodb.net/?appName=Cluster0")
    .then(() => console.log("Mongodb connected")).catch((err)=> console.log(err));
} 


export default connectDb;