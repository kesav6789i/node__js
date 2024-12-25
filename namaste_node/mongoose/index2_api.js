const express=require("express");
const app=express();
const db=require("./config/db_file.js");
const User=require("./userSchema.js");

app.use(express.json());

//post data into db (signup api)
app.post("/signup",async(req,res)=>{

    // console.log(req);
    //console.log(req.body);
    //"req.body" must be js object but it is json object -->so use middleware ie express.json() to convert to js object cool ryt
    const userData=req.body;
    // dynamically take data from req ie from (Thunder client's body portion)😅
    const user=new User(userData);
    await user.save();
    //await is used becoz mongoose functions are asyncronous bhehan
    res.send("user signed successfully");
    
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
app.patch("/update",async(req,res)=>{

    const id=req.body._id;
    const updateData=req.body;
    try{
        const ans=await User.findByIdAndUpdate(id,updateData); 
        res.send(ans);   
      }
    catch{
        res.status(500).send("something went wrong cannot update data");
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