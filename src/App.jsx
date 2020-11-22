import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/credentials" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/achievements" component={Achievements} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
