import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Update = ({user,setLoginUser}) => {


    const [username, setuname] = useState(user.username)
    const [profile, setprofile] = useState(user.profile)
    const [password, setpass] = useState(user.password)
    const [name, setname] = useState(user.name)
    const [age, setage] = useState(user.age)

    const upduser = {
        username:username,
        profile:profile,
        password: password,
        name: name,
        age: age,
      };

    const navigate = useNavigate();
    const updateuser = () => {
        // const id = user._id
        // axios.post("/api/updateUser", {"id": id},upduser)
        // .then(res => {
        //     alert(res.data.message)
        //     setLoginUser({})
        //     setLoginUser(res.data.upduser)
        //     navigate('/find')
        // });
        setLoginUser({})
        axios.put("/api/updateuser", upduser).then((res) =>  setLoginUser(res.data.upduser));
       alert("Profile Updated Successfully")
        console.log(upduser);
        navigate('/')
      };

    return (
        <div>
        <h1>Update Account</h1>
        <br/>

        <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    <form>
                        {/* <div className="form-group">
                            <label >Username : </label>
                            <input className="form-control"  placeholder="Enter Username" value={user} onChange={(e) => setname(e.target.value)}/>
                        </div> */}
                        <div className="form-group">
                            <label>Profile Url :</label>
                            <input type="text" className="form-control" placeholder="Enter Url"  value={profile} onChange={(e) => setprofile(e.target.value)} ></input>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type="text" className="form-control" placeholder="Enter New Password"  value={password} onChange={(e) => setpass(e.target.value)} ></input>
                        </div>
                        <div className="form-group">
                            <label>Name :</label>
                            <input  className="form-control" placeholder="Enter New Name"  value={name} onChange={(e) => setname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Age :</label>
                            <input  className="form-control" placeholder="Enter New Age" value={age} onChange={(e) => setage(e.target.value)} />
                        </div>
                        <p></p>
                        <button type="submit" className="btn btn-primary" style={{width: "252px"}} onClick={updateuser}>Update</button>
                        <p></p>
                        <button type="submit" class="btn btn-primary" style={{width: "252px"}}  onClick={() => navigate('/')}>Go to Home</button>
                    </form>
                    </div>
            </div>
            
        </div>
    )
}

export default Update
