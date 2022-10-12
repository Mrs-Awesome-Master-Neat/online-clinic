import '../style/App.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './Login';

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"}>
          <Login/>
        </Route>
        <Route path={"/signin"}>
             {/* <Signin/> */}
        </Route>
  
        <Route exact path={"/"}>
          {/* create a button here to route to your component */}
          <button onClick={() => history.push("login")}>Login</button>
          <button onClick={() => history.push("signin")}>signin</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;