import '../style/App.css';
import {Switch,Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* create a button here to route to your component */}
        
        <Route path={"/"}>

        </Route>
        
      </Switch>
    </div>
  );

  
}

export default App;
