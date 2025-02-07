const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.send('home page');
})

module.exports = app;