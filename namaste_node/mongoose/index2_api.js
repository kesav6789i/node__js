const express=require("express");
const app=express();
const db=require("./config/db_file.js");
const User=require("./userSchema.js");
const api_validate=require("./utils/validate.js");
const bcrypt=require("bcrypt");
app.use(express.json());

//post data into db (signup api)
app.post("/signup",async(req,res)=>{

    try{

        // validate api
        api_validate(req);

        // encrypt password (npm i bcrypt)
        let {name,email,gender,age,password}=req.body; 
        const encrypt_password=await bcrypt.hash(password, 8);
        password=encrypt_password;
        
        //save changes in db (password=encrypt_password)
        console.log('req.body:',req.body);
        // const user=new User(req.body);
        const user=new User({name,email,gender,age,password});
        await user.save();
        res.send("user signed successfully");
    }catch(err){
        res.status(500).send(err.message);
    }
    // console.log(req);
    //console.log(req.body);
    //"req.body" must be js object but it is json object -->so use middleware ie express.json() to convert to js object cool ryt
    // const userData=req.body;
    // dynamically take data from req ie from (Thunder client's body portion)😅
    // const user=new User(userData);
    // await user.save();
    // //await is used becoz mongoose functions are asyncronous bhehan
    // res.send("user signed successfully");
    
})

//login api (for checking if user is present in db or not )
app.post("/login",async(req,res)=>{

    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            throw new Error("Invalid email id");
        }
        const isValid=await bcrypt.compare(password,user.password);//plain,encrypted;
        if(!isValid){
            throw new Error("Invalid password");
        }
        res.send("user logged in successfully");
    }catch(err){
        res.status(500).send(err.message);
    }
})

//get data for feed checking (feed api)
app.get("/feed",async(req,res)=>{

    const userName=req.body.name;
    try{
        const ans=await User.find({name:userName});
        console.log('ans:'+ans);
        
        res.send(ans);
    }
    catch{
        res.status(500).send("something went wrong cannot fetch data");
    }
})

//delete a user 
app.delete("/del",async(req,res)=>{

    const id=req.body._id;
    try{
        const ans=await User.findByIdAndDelete(id);
        
        res.send(ans);
    }
    catch{
        res.status(500).send("something went wrong cannot delete data");
    }
})

//update a user
app.patch("/update/:_id",async(req,res)=>{

    const id=req.params._id;
    console.log('id:',id);
    
    // const id="6773e948b769a124ef6527ae";
    const updateData=req.body;
    try{
        const ans=await User.findByIdAndUpdate(id,updateData,{runValidators:true,new:true}); 
        console.log('ans:',ans);
        
        res.send(ans);   
      }
    catch(err){
        res.status(500).send("something went wrong cannot update data"+" "+err.message);
    }
})
db().then(()=>{
    console.log('database connection....established');
    app.listen(7777,()=>{
        console.log('server is running.....');
    })

}).catch((err)=>{
    console.log('Error'+err.message); 
})

// const user=new User({
//     name:"keerthi",
//     age:21,
//     email:"rkeerthi@gmail.com",
//     gender:"femail",
//     profession:"student"
// })

// user.save();