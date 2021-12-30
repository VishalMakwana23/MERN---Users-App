import React from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
const Login = ( { setLoginUser } ) => {

    const navigate = useNavigate ();



    const loginUser = () => {
        axios.post("/api/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate('/',user)
        });
    };

    
    const user = {
        username: "",
        password: "",
      };

    return (
        <div>
            <h1>Login</h1><br/>
            <input type="text" class="form-control" placeholder="Enter Username" onChange={(e) => (user.username = e.target.value)} style={{marginBottom: '4px'}}></input>
            <input type="text" class="form-control"  placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)} style={{marginBottom: '4px'}}></input>
            {/* <button onClick={loginUser}>Login</button><br/>
            <div>or</div><br/>
            <button onClick={() => navigate('/register')}>Register</button><br/> */}
            <button type="submit" class="btn btn-success" style={{width: "286px",marginBottom: '4px'}}  onClick={loginUser} >Login</button>
            <div align="center">or</div>
            <button type="submit" class="btn btn-primary" style={{width: "286px",marginBottom: '4px'}}  onClick={() => navigate('/register')} >Register</button>
            
        </div>
    )
}

export default Login
