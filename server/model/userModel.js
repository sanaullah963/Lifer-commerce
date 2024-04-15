const mongoose=require('mongoose')

const userModel=mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  numberORemail:{
    type:String,
    require:false
  },
  password:{
    type:String,
    require:true
  },
  address:{
    type:String,
    require:false
  },
  insartDate:{
    type:Number,
    require:true,
    default: Date.now()
  },
})
module.exports=mongoose.model('user',userModel)
