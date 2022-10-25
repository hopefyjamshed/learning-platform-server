const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());



const category = require('./data/category.json')
const courses = require("./data/courses.json")



app.get('/', (req, res) => {
    res.send("server is running successfully");
});


// all courses 
app.get('/courses', (req, res) => {
    res.send(courses);
});

// category 
app.get('/category', (req, res) => {
    res.send(category);
});


// category of courses 
app.get('/course/:category', (req, res) => {
    const category = req.params.category;
    const categoryCourse = courses.filter(course => course.category === category);
    res.send(categoryCourse);
});

// single course detail 
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const idCourse = courses.find(course => course.id === id);
    res.send(idCourse);
});

// language and framework 
app.get('/titleCategory/:titleCategory', (req, res) => {
    const titleCategory = req.params.titleCategory;
    const titleCategoryCourse = courses.filter(course => course.titleCategory === titleCategory);
    res.send(titleCategoryCourse);
});



app.listen(port, () => {
    console.log(`server runnig on port ${port}`);
});
