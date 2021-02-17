import "./App.css";
import { BrowserRouter as Router, 
  Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import RandomPlanet from "./components/RandomPlanet";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <main className="app-main">
             
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/randomPlanet" component={RandomPlanet} />
        </Switch>
      </main>
      </Router>
    </div>

  );
}
export default App;
