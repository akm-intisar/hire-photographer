import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Freelancer from './Components/Freelancer/Freelancer';
import Wedding from './Components/Wedding/Wedding';

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

          <Route path="/company">
            <Freelancer></Freelancer>
          </Route>
<Route path="/wedding">
  <Wedding></Wedding>
</Route>

        </Switch>
      </Router>
  );
}

export default App;
