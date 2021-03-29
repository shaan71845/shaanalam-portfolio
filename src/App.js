import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/project/:slug/" component={Project} />
      </Switch>
    </Router>
  );
};

export default App;
