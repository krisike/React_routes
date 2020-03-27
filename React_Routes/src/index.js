import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Happy">Happy</Link>
            </li>
            <li>
              <Link to="/Sleepy">Sleepy</Link>
            </li>
            <li>
              <Link to="/Guilty">Guilty</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/"></Route>
            <Route path="/Happy">
              <Happy />
            </Route>
            <Route path="/Sleepy">
              <Sleepy />
            </Route>
            <Route exact path="/Guilty">
              <Guilty />
            </Route>
          </Switch>
        </div>
      </Router>
      // your code goes here
    );
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
