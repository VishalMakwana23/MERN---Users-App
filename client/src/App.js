import './App.css';
import axios from "axios"
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Find from './Components/Find';
import Update from './Components/Update';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserDetail from './Components/UserDetail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {


  const [user,setLoginUser] = useState({})
  const [findUser,setFindUser] = useState({})

  useEffect(() => {

  })
  return (
    <div className="App">
     
     <Router>
       <Routes>
       
         <Route exact path="/"  element={user && user._id ? <Home user={user} setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>
         <Route path="/login"
           element={<Login setLoginUser={setLoginUser}/>}
          />
         <Route path="/register" element={<Register/>}/>
         <Route path="/find" element={<Find setFindUser={setFindUser}/>}/>
         <Route path="/update" element={<Update user={user} setLoginUser={setLoginUser}/>}/>
         <Route path="/userDetail" element={<UserDetail findUser={findUser} setFindUser={setFindUser}/>}/>
       </Routes>
     </Router>
      
     
      
      
    </div>
  );
}

export default App;
