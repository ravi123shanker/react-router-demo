import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (props) => {
  return ( <h1> Welcome User </h1>)
}

const Home = (props) => {
    return ( <h1> Welcome Home </h1>)
}

const About = (props) => {
    return ( <h1> Welcome About </h1>)
}

class RouteLink extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <Link to="/" exact >Home</Link>
          </li>
          <li>
            <Link to="/about" exact>About</Link>
          </li>
          <li>
            <Link to="/user" exact >User</Link>
          </li>
          </ul>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/user" exact component={User}/>
        </div>
      </Router>
    );
  }
}

export default RouteLink;
