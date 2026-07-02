import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/student",(req,res)=>{
    res.json({name:"Aayush patial",age:21});
});
app.get("/profile",(req,res)=>{
    res.status(200).send("This is a profile page");
}); 


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
