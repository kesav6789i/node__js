//D:\node__js\namaste_node\mongoose\index.js
const express=require("express");
const app=express();
const db=require("./config/db_file.js");
const mongoose = require('mongoose');


// Define a Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // A required string field
  email: { type: String, required: true, unique: true },  // Must be unique
  age: { type: Number, min: 18, max: 99 },  // Number between 18 and 99
  createdAt: { type: Date, default: Date.now },  // Default value: now
});

// Create a Model based on the schema
const User3 = mongoose.model('User3', userSchema);

// Example Usage
app.post("/signup",async (req,res) => {
  // Creating a new user document
  const newUser = new User3({ name: 'John Doe1113', email: 'johndkkoe@examphle.com', age: 75 });

  try {
    const savedUser = await newUser.save(); // Save the user document to the database
    console.log('User saved:', savedUser);
    res.send("user is signed up");
  } catch (error) {
    console.error('Error saving user:', error);
  }
});

db().then(()=>{
    console.log('database connection....established');
    app.listen(7777,()=>{
        console.log('server is running.....');
    })
}).catch((err)=>{
    console.log('Error'+err.message); 
})
