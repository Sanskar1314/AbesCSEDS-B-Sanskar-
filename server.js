const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res)=>{
    res.send('this is my first express server');
})
app.get('/about', (req, res)=>{
    res.send('this is my first about page');
})
app.get('/contact', (req, res)=>{
    res.send('<h1>7985674322 is my contact number</h1>');
})
app.listen(port, ()=>{
    console.log(`Server is running at:http://localhost:${port}`);
})