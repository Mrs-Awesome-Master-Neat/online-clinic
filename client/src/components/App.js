import '../style/App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from "./Login";
import Dashboard from './DashBoard';
import Signup from './Signup';

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

  function onLogin(user){
    setUser(user)
    history.push('/dashboard')
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
          <Dashboard/>
        </Route>
        

        <Route exact path={"/"}>
          {/* create a button here to route to your component */}
          <button onClick={() => history.push("login")}>Log In</button>

          <button onClick={() => history.push("signup")}>Sign Up</button>
          <button onClick={() => history.push("dashboard")}>dashboard</button>
          
          
        </Route>
      </Switch>
    </div>
  )

  
}

export default App;