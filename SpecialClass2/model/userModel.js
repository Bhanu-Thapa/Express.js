const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,'Name should not empty'],
    trim:true, //extra space remove,
    maxLength:[30, 'Name must be less than 20']
  },
  email:{
    type:String,
    required: [true,'email is required'],
    unique:true
  }
})

module.exports = mongoose.model('user',userSchema);
// mongoose.model('user',userSchema); 'user' is a collection name (table name) - which show as a 'users' in DB