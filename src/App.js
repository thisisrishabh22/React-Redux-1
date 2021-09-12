import Home from "./app/page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./app/page/About";
import Posts from "./app/page/Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Posts} />
      </Switch>
    </Router>
  );
}

export default App;
