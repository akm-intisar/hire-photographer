import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Freelancer from "./Components/Freelancer/Freelancer";
import Wedding from "./Components/Wedding/Wedding";
import About from "./Components/About/About";
import UrgentNeed from "./Components/UrgentNeed/UrgentNeed";

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

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/urgent">
          <UrgentNeed></UrgentNeed>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
