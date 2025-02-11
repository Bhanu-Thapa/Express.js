const User = require('../model/userModel.js')


// parameter(req,res) - Express automatically provides them when calling your function.
exports.home = (req,res)=>{
  res.send('home page');
}

exports.createuser = async(req,res)=>{
  try{
    // extract info
    const {name,email} =req.body

    if(!name||!email){
      throw new Error('name and email are required')
    }

    // const userExist = User.findOne({email})



    // if(userExist){
    //   throw new Error('Email already exist')
    // }

    const dataUser = await User.create({
      name:name,
      email:email
    })

    res.status(200).json({
      success:true,
      message:'user created successfully',
      dataUser
    })

  }catch(error){
    console.log(error)
    res.status(400).json({
      success:false,
      message:error.message,
    })
  }
}

exports.getusers = async(req,res)=>{
  try{
    const data = await User.find({})
    res.status(200).json({
      success:true,
      data
    })

  }catch(error){
    console.log(error)
    res.status(400).json({
      success:false,
      message:error.message,
    })
  }

}

exports.deleteuser = async(req,res)=>{
  try{

   const userid = req.params.id
   const deleteduser = await User.findByIdAndDelete(userid)
   res.status(200).json({
    success:true,
    message:'User Deleted',
    deleteduser
   })

  }catch(error){
    console.log(error)
    res.status(400).json({
      success:false,
      message:error.message,
    })
    }

  }


exports.updateuser = async (req,res)=>{
  try{

  const updatedata = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.status(200).json({
    success:true,
    message:'User update',
    updatedata
  })

  }
  catch(error){
    console.log(error)
    res.status(400).json({
      success:false,
      message:error.message,
    })
  }
}