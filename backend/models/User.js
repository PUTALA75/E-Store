const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
         required:true,
         Unique:true,
    },
    password:{
        type:String,
         required:true,
    }
})

const UserData=mongoose.model("user",UserSchema)

module.exports = UserData;