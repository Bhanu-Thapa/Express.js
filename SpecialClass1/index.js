// //////////////////// Database Connection and Server ////////////////

import app from './app.js'
import mongoose from 'mongoose'  //ODM

const PORT = 3000;

/////////IMPORTANT NOTE //////////////////
// 1. First Fetch Database.
// 2. Database connection may fail / throw Error.
// 3. Database is always in another Continent.


// const mongoose = require('mongoose');

// Database Connection
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// mongoose.connect('Database security string here');

// IIFE
(async ()=>{
  try{

    // DB Connection
    await mongoose.connect('Database security string here');
    console.log('db connected successfully');

    // Events emit for server error
    app.on('error',(err)=>{
      console.log('error in server',err);
      throw err;
    })

    // Listening server
    app.listen(PORT, ()=>{
      console.log(`Server is Listening at port:${PORT}`);
    });
  // Catch Error for DB Connection fail
  }catch(err){
    console.log('error',err);
    throw(err);
  }
})();


// app.listen(PORT, ()=>{
//   console.log(`Server is running at port:${PORT}`);
// });
