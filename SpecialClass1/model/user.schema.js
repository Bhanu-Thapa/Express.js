import mongoose from 'mongoose'

// Creating Schema
const userSchema  = new mongoose.Schema({
  name: {
    type: String,
    required:[true,'Name is Required'],
    maxLength:[30, 'Name should less than 30 Character']
  },
  email: {
    type:String,
    unique : true
  },
  user:{
    type:String,
    unique : true
  },
  password:String,
  age:Number,
})

// exporting only mongoose model function
export default mongoose.model('user',userSchema);
// user name reflect in database as "users"