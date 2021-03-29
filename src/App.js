import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {/* <Navbar /> */}
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact />
        <Route path="/project/:slug/" component={Project} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
