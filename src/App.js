import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Freelancer from "./Components/Freelancer/Freelancer";
import DonateUs from "./Components/DonateUs/DonateUs";
import About from "./Components/About/About";
import UrgentNeed from "./Components/UrgentNeed/UrgentNeed";
import "./App.css";
import Company from "./Components/Company/Company";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/freelancer">
          <Freelancer></Freelancer>
        </Route>

        <Route path="/company">
          <Company></Company>
        </Route>
        <Route path="/DonateUs">
          <DonateUs></DonateUs>
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
