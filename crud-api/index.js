import express from "express";

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log("This is a middleware");
    next();
});

const students = [
    {
        id: 1,
        name:"Aayush patial",
        class : "BCA",
        city: "Jalandhar",
        school: "DAV University",
    },
    {
        id:2,
        name :"Karan chauhan",
        class:"3rd",
        city:"Mumbai",
        school:"Mumbai international school"
    },
    {
        id:3,
        name:"Rohit kumar",
        class:"2nd",
        city:"Pune",
        school:"Hiensenberg international school Pune"
    }
];


app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/student/:id",(req,res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
});

app.post("/students",(req,res)=>{
   students.push({id:5,name:"Aman patial",age:18});
   res.json({
    message:"Student added successfully",students
   });
}) ;


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


// API'S= Application Programming Interface
// GET
// POST
// PUT
// DELETE