import Home from "./app/page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
