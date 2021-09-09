import Home from "./app/page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./app/page/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
