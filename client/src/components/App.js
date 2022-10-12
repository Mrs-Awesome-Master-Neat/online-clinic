import '../style/App.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './Login';
import Dashboard from './DashBoard';

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/signin"}>
          {/* <Signin/> */}
        </Route>
        <Route path={"/dashboard"}>
          <Dashboard/>
        </Route>

        <Route exact path={"/"}>
          {/* create a button here to route to your component */}
          <button onClick={() => history.push("login")}>Login</button>
          <button onClick={() => history.push("signin")}>signin</button>
          <button onClick={() => history.push("dashboard")}>dashboard</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;