const mongoose=require('mongoose');
const userSchemaa=new mongoose.Schema(
    {
        name:String,
        age:Number,
        email:String,
        gender:String,
        profession:String,
    }    
)
module.exports=mongoose.model("uuser",userSchemaa);