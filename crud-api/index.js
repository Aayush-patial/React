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
        school:"Hiensenberg international school California"
    }
];


app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/students/:id",(req,res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
});

app.post("/students",(req,res)=>{
//    students.push({id:5,name:"Aman patial",age:18});
    students.push(req.body);
   res.json({
    message:"Student added successfully",students
   });
}) ;
app.put("/students/:id",(req,res) =>{
    const studentId = Number(req.params.id,10);

    const index = students.findIndex(s => s.id === studentId);

    students[index] =req.body;

    res.json({
        message : "Student updated successfully",students
    });
});

app.delete("/students/:id" ,(req,res) =>{

    const studentiId = Number(req.params.id,10);
    
    const new_students = students.filter(s=> s.id !== studentiId);

    res.json ({
        message:"Student deleted successfully", 
       new_students
    });
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


// API'S= Application Programming Interface
// GET
// POST
// PUT
// DELETE