
const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/dcs")
  .then(() => console.log("mongo db connected"));

app.get("/", (req, res) => res.send("Hello Fullstack!"));

// Get list of all users
app.get("/api/list", async (req, res) => {
  const userList = await userModel.find({}, { username: true });

  if (userList.length === 0) {
    return res.json({ data: "no users in fullstack" });
  }

  return res.json({ data: userList });
});

//Find User
app.post("/api/find",async(req,res)=>{
  const uname = req.body.username;
  const user = await userModel.findOne({username:uname});

  if(user){
      return res.json({message: "login successfull",user:user})
  }else{
    return res.json({message: "Wrong Credentials"})
  }
});



// //Login
// app.post('/' , async (req , res)=>{
//   const uname = req.body.username;
//   const pass = req.body.password;
//   const user = await userModel.findOne({username:uname,password:pass});

//   if(user){
//       return res.json({data: "login successfull"})
//   }

//   return res.json({data: "Wrong Credentials"})
// });

// Register user
app.post("/api/registration", (req, res) => {
  const  newUser  = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully, Please Login Now" });
});

//Login user
app.post('/api/login' , async (req , res)=>{
  const uname = req.body.username;
  const pass = req.body.password;
  const user = await userModel.findOne({username:uname,password:pass});

  if(user){
      return res.json({message: "login successfull",user:user})
  }else{
    return res.json({message: "Wrong Credentials"})
  }
});

app.delete('/api/deleteuser',async(req,res)=>{

  const uname = req.body.username;
  const deleteUser = await userModel.findOneAndDelete({username:uname});
  if(deleteUser){
      return res.json({data: "User deleted successfully"});
  } else {
    return res.json({data: "can't delete"});
  }
  });







app.listen(port, () => console.log(`server running on port 4000`));




