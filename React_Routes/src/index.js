import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
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

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            
          </Route>
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
    )
  }
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }


ReactDOM.render( <Home />, document.getElementById('root') );
