
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
      return res.json({message: "find successfull",user:user})
  }else{
    return res.json({message: "Wrong Credentials"})
  }
});

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


//Delete User
app.post('/api/deleteuser',async(req,res)=>{
  const uid = req.body.id;
  const deleteUser = await userModel.findOneAndDelete({_id:uid});
  if(deleteUser){
      return res.json({data: "Account deleted successfully"});
  } else {
    return res.json({data: "can't delete"});
  }
  });

app.listen(port, () => console.log(`server running on port 4000`));

//Update User

app.post("/api/updateUser", async (req, res) => {
  const id = req.body.id
  const uname = req.body.title;
  const pass = req.body.publisher;
  const name = req.body.auther;
  const age = req.body.price;
  const updateUser = await booksModel.findOneAndUpdate(
      { _id: id },
      { username: uname,
       password: pass,
       name: name,
       age: age},
      {new:true}
  );
  return res.json({ data: "Profile  updated successfully",user:user });
});


