// npm install express mongoose body-parser

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Define Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String
});


// Create Student Model
const Student = mongoose.model("Student", studentSchema);


// 1. Retrieve all students
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});


// 2. Retrieve student by ID
app.get("/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});


// 3. Add a new student
app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});


// 4. Update student details by ID
app.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});


// 5. Delete student by ID
app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
});


// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
