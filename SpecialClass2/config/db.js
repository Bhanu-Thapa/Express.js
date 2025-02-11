require('dotenv').config();
const mongoose = require('mongoose')

const dbcon = async()=>{
  // try{
  //  await mongoose.connect(process.env.MONGO_URI)
  //   console.log('db connected')
  // }
  // catch(err){
  //   console.log(err)
  // }
// ////////////

return mongoose.connect(process.env.MONGO_URI)
.then((conn)=>{
  console.log(`Connnected to DB ${conn.connection.host}`);
})
.catch((err)=>{
  console.log(err.message)
  process.exit(1)
})
}

module.exports = dbcon;