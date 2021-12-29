import React from 'react'
import { useNavigate } from 'react-router-dom'
const UserDetail = ({ findUser,setFindUser }) => {

    const navigate = useNavigate ();
    
    return (
        <div>
            <h2>User Detail</h2>

            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Username : {findUser.username}</h5>
                    <p className="card-text">Name : {findUser.name}</p>
                    <p className="card-text">Age : {findUser.age}</p>
                    <p></p>
                    <button type="submit" class="btn btn-primary" style={{width: "252px"}} onClick={() => navigate('/find')}>Go to Find</button>
                </div>
            </div>

            {/* <h3>{findUser.username}</h3>
            <h4>{findUser.name}</h4>
            <h4>{findUser.age}</h4>
            <button onClick={() => navigate('/find')}>Go to Find</button> */}
        </div>
    )
}

export default UserDetail
