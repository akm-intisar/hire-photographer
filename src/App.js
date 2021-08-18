import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Freelancer from './Components/Freelancer/Freelancer';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/freelancer">
            <Freelancer></Freelancer>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
