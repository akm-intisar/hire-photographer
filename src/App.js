import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
