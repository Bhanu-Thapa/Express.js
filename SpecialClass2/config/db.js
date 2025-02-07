require('dotenv').config();
const mongoose = require('mongoose')

const dbcon = async()=>{
  try{
   await mongoose.connect(process.env.MONGO_URI)
    console.log('db connected')

  }
  catch(err){
    console.log(err)
  }
}

module.exports = dbcon;