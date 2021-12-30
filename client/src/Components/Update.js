import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Update = ({user,setLoginUser}) => {

    const navigate = useNavigate();
    // const updateuser = () => {
    //     const id = user._id
    //     axios.post("/api/updateUser", {"id": id},upduser)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser({})
    //         setLoginUser(res.data.upduser)
    //         navigate('/find')
    //     });
    //   };

    const updateuser = () => {
        setLoginUser({})
             setLoginUser(upduser)
             navigate('/')
    }
    
      const upduser = {
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
                            <label >Username : </label>
                            <input className="form-control"  placeholder="Enter Username" value={user.username} onChange={(e) => (upduser.username = e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type="text" className="form-control" placeholder="Enter New Password"  onChange={(e) => (upduser.password = e.target.value)} ></input>
                        </div>
                        <div className="form-group">
                            <label>Name :</label>
                            <input  className="form-control" placeholder="Enter New Name"  onChange={(e) => (upduser.name = e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Age :</label>
                            <input  className="form-control" placeholder="Enter New Age"  onChange={(e) => (upduser.age = e.target.value)}/>
                        </div>
                        <p></p>
                        <button type="submit" className="btn btn-primary" style={{width: "252px"}} onClick={updateuser}>Update</button>
                        
                    </form>
                    </div>
            </div>
            
        </div>
    )
}

export default Update
