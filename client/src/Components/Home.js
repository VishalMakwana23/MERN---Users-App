import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Home = ({user,setLoginUser}) => {
  
    const navigate = useNavigate();

    
  const deleteUser = () => {
    const id = user._id
    axios.post("/api/deleteuser", {"id": id}).then(res => alert(res.data.data)); 
    setLoginUser({})
    navigate('/')
  };
    return (
        
        <div>
             <h1>Home Page</h1>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Username : {user.username}</h5>
                    <p className="card-text">Name : {user.name}</p>
                    <p className="card-text">Age : {user.age}</p>
                    
                </div>
            </div>
                {/* <h2>{user.username}</h2>
                <h3>{user.name}</h3>
                <h3>{user.age}</h3> */}
            <p></p>
            <button type="submit" class="btn btn-warning" onClick={() => navigate('/update')} style={{marginRight: '12px'}}>Update Account</button>
            <button type="submit" class="btn btn-danger" onClick={deleteUser} >Delete Account</button>
            <p></p>
            <button type="submit" class="btn btn-primary" style={{width: "286px",marginBottom: '4px'}}  onClick={() => navigate('/find')} >Find</button><br/>
            <button type="submit" class="btn btn-danger" style={{width: "286px",marginBottom: '4px'}}  onClick={() => setLoginUser({})} >Logout</button><br/>
            {/* <button onClick={() => navigate('/find')}>Find</button>
            <button>Update</button><button onClick={deleteUser}>Delete Acoount</button><br/>
            <button onClick={() => setLoginUser({})}>Logout</button> */}
        </div>
    )
}

export default Home
