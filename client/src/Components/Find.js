import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Find = ({setFindUser }) => {

    const navigate = useNavigate ();
    const fetchUser = () => {
        axios.post("/api/find",user)
        .then(res => {console.log(res.data)
        setFindUser({})
        setFindUser(res.data.user)
        navigate('/userDetail',user)
    });
};
    
        const user = {
            username: "",
          };
    return (
        <div>
            <h1>Find user</h1>
            <input type="text" placeholder="Enter Username" onChange={(e) => (user.username = e.target.value)} style={{marginRight: '7px'}}></input>
            {/* <button onClick={fetchUser}>Find</button><br/><br/> */}
            {/* <button onClick={() => navigate('/')}>Go to Home</button> */}
            <button type="submit" class="btn btn-primary"  onClick={fetchUser}>Find</button>
            <p></p>
            <button type="submit" class="btn btn-primary" style={{width: "252px"}}  onClick={() => navigate('/')}>Go to Home</button>
            
        </div>
        
    )
}

export default Find
