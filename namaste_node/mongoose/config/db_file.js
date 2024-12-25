//D:\node__js\namaste_node\mongoose\config\db_file.jsmongoose\config\db_file.js
const mongoose = require("mongoose");
const connection_url = "mongodb+srv://keerthi:passwordpassword@cluster0.kk6t9.mongodb.net/khan";
const db= ()=> {
    return mongoose.connect(connection_url)
};
 module.exports=db;