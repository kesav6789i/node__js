
api_validate = (req) => {
const {name,age,email,password,gender,profession}=req.body;
if(name.lenght>10)
    throw new Error("Name should be less than 10 characters");
if(age<18)
    throw new Error("Age should be greater than 18");
if(password.length<8)
    throw new Error("Password should be greater than 8 characters");
if(password.length>15)
    throw new Error("Password should be less than 15 characters "); 
}
module.exports = api_validate;