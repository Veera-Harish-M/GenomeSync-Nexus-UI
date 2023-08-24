import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Landing from "./landing/landing";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
