import Home from './Home/Home';
import NavBar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produce from './Produce/Produce';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/produce">
            <Produce />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
