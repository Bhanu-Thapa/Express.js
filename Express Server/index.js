const express = require('express');

const app = express();

const HOSTNAME = 'localhost';
const PORT = '3000'

app.get('/',(req,res)=>{
  res.send('<h1>Hello World</h1>');
});

app.get('/about',(req,res)=>{
  res.send('About Page');
});

app.get('/contact',(req,res)=>{
  res.send('Contact Page');
});

app.listen(PORT,()=>{
  console.log(`Server is running at ${HOSTNAME} in port no:${PORT}`)
});