require('dotenv').config();
const app = require('./app.js')
const con = require('./config/db.js')

const PORT = process.env.PORT || 3000;

(async()=>{
  try{
    await con();

    app.listen(PORT, ()=>{
      console.log(`server running at ${PORT}`)
    })
  }
  catch(err){
    console.log(err)
  }
})()



