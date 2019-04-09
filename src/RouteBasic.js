import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
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

class RouteBasic extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/user" exact component={User}/>
        </div>
      </Router>
    );
  }
}

export default RouteBasic;
