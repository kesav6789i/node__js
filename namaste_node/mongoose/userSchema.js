const mongoose=require('mongoose');
const validator=require('validator');
const userSchemaa=new mongoose.Schema(
    {
        name:{
            
            type:String,
            required:true,
            minLength:5,
            // unique:true,
            // index:true,
        },
        age:{
            
            type:Number,
            required:true,
            min:18,
            max:100,
        },
        email:{
            
            type:String,
            required:true,
            immutable:true,
            validate:{
                validator(value){
                    if(!validator.isEmail(value)){
                    throw new Error("Invalid Email!!!")
                }
                }
            }
            
        },
        gender:{
            
            type:String,
            required:true,
            validate:{
                validator(value){
                let pool=["female","male","others"];
                if(!pool.includes(value)){
                    throw new Error("Invalid gender!!!")
                }
            }
            }
        },
        password:{
            type:String,
            required:true,
            minLength:8,
           
        },
        profession:String,
    }    
);
module.exports=mongoose.model("uuser1",userSchemaa);