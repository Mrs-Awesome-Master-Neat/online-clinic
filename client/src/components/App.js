import '../style/App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from "./Login";
import Dashboard from './DashBoard';
import Signup from './Signup';
import Profile from './Profile';

import { useEffect, useState } from 'react';

function App() {
  const [user,setUser]=useState(null)
  const history = useHistory()

  useEffect((()=>{
    fetch("/me")
    .then(res=>{
      if(res.ok){
        res.json().then(setUser)
        history.push("/dashboard")
      }
    })
  }),[])
  console.log(user)

  function onLogin(user){
    setUser(user)
    history.push('/dashboard')
  }

  function dprofile(user){
    setUser(user)
    history.push("/dashboard/profile")
  }
  
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"}>
          <Login onLogin={onLogin}/>
        </Route>
        <Route path={"/signup"}>
          <Signup onLogin={onLogin}/> 
        </Route>
        <Route path={"/dashboard"}>
          {user? <Dashboard user={user}/>:null}
        </Route>
        <Route path={"/dashboard/profile"}>
          {user? <Profile dprofile={dprofile}/>:null}
        </Route>

        <Route exact path={"/"}>
          {/* create a button here to route to your component */}
          <button onClick={() => history.push("login")}>Log In</button>

          <button onClick={() => history.push("signup")}>Sign Up</button>
          <button onClick={() => history.push("dashboard")}>dashboard</button>
          
          
        </Route>
      </Switch>
    </div>
  );

  
}

export default App;