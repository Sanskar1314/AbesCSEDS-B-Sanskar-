const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res)=>{
    res.send('this is my first express server');
})
app.get('/about', (req, res)=>{
    // res.send('this is my first about page');
    const students = [
        {
            id: 1,
            name: 'Sanskar',
            age: '20'
        },
        {
            id: 2,
            name: 'Ankit',
            age: '20'
        },
        {
            id: 3,
            name: 'Udbhav',
            age: '20'
        },
        {
            id: 4,
            name: 'Santosh',
            age: '20'
        },
        {
            id: 5,
            name: 'Vaibhav',
            age: '20'
        }
    ]
    
})
app.get('/contact', (req, res)=>{
    res.send('<h1>7985674322 is my contact number</h1>');
})
app.listen(port, ()=>{
    console.log(`Server is running at:http://localhost:${port}`);
})