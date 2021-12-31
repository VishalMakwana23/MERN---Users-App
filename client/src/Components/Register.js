import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const fetchUsers = () => {
  axios.get("/api/list").then((res) => console.log(res.data))
  };

  const registerUsers = () => {
    axios.post("/api/registration", user).then(res => alert(res.data.data));
    navigate('/login')
  };


  
  const user = {
    profile: "",
    username: "",
    password: "",
    name: "",
    age: 0,
  };

    return (
        <div>
            <h1>Register</h1>
      <br/>

      <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                <form>
                      <div className="form-group">
                        <label >Profile URL : </label>
                        <input className="form-control"  placeholder="Enter Url" onChange={(e) => (user.profile = e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label >Username : </label>
                        <input className="form-control"  placeholder="Enter Username" onChange={(e) => (user.username = e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label>Password :</label>
                        <input  className="form-control" placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label>Name :</label>
                        <input  className="form-control" placeholder="Enter Name" onChange={(e) => (user.name = e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label>Age :</label>
                        <input  className="form-control" placeholder="Enter Age" onChange={(e) => (user.age = e.target.value)}/>
                      </div>
                      <p></p>
                      <button type="submit" className="btn btn-primary" style={{width: "252px"}} onClick={registerUsers}>Register</button>
                      <div align="center">or</div>
                      <button type="submit" className="btn btn-primary" style={{width: "252px"}} onClick={() => navigate('/login')}>Login</button>
                </form>
                </div>
            </div>


      {/* <label>Username : </label>
      <input 
        placeholfer="Username" onChange={(e) => (user.username = e.target.value)}
      />
      <br/>
      <label>Password : </label>
      <input 
        placeholfer="Password" onChange={(e) => (user.password = e.target.value)}
      />
       <br/>
       <label>Name : </label>
      <input 
        placeholfer="name" onChange={(e) => (user.name = e.target.value)}
      />
       <br/>
       <label>Age : </label>
      <input 
        placeholfer="age" onChange={(e) => (user.age = e.target.value)}
      />
       <br/>
       
      <button onClick={fetchUsers}>fetch Users</button>
      <button onClick={registerUsers}>Register Users</button>
      <div>or</div> <br/>
      <button onClick={() => navigate('/login')}>Login</button><br/> */}
       
        </div>
    )
}

export default Register
