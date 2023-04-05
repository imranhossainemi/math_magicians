/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Quote from './Components/Quote';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className="home">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/Quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
