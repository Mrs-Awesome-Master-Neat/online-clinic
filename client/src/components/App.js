import '../style/App.css';
import {Switch,Route} from 'react-router-dom'

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