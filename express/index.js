import express from "express";

const app = express();

app.use((req,res,next)=>{
    console.log("This is a middleware");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/student",(req,res)=>{
    res.json({name:"Aayush patial",age:21});
});

app.get("/student/:id",(req,res)=>{
    // res.json(console.log(req.params.id));
    res.json(console.log(req.query));
})
app.get("/profile",(req,res)=>{
    res.status(200).send("This is a profile page");
}); 


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
