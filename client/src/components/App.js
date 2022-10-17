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
  if (user){
    
  }
  console.log(user)

  function onLogin(user){
    setUser(user)
    history.push('/dashboard')
  }
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"}>
        
        </Route>
        <Route path={"/signup"}>
          <Signup onLogin={onLogin}/> 
        </Route>
        <Route path={"/dashboard"}>
          {user? <Dashboard user={user}/>:null}
        </Route>

        <Route exact path={"/"}>          
           <Login onLogin={onLogin}/>
        </Route>

        
      </Switch>
    </div>
  )

  
}

export default App;