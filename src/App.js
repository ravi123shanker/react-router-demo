import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (props) => {
  return ( <h1> Welcome User: {props.match.params.username} </h1>)
}

const Home = (props) => {
  return ( <h1> Welcome Home </h1>)
}

const About = (props) => {
  return ( <h1> Welcome About </h1>)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn:false
    }
  }
  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn  
    }))
  }
  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'green' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color:'green' }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/user/john" exact activeStyle={
              { color:'green' }
            }>User John</NavLink>
          </li>
          <li>
            <NavLink to="/user/peter" exact activeStyle={
              { color:'green' }
            }>User Peter</NavLink>
          </li>
          </ul>

        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>

        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/user/:username" exact render={({match})=>(
          this.state.loggedIn ? ( <User match={match}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router>
    );
  }
}

export default App;
