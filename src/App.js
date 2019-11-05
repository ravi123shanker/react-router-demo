import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const User = (props) => {
  return ( <h1> Welcome User: {props.match.params.username} </h1>)
}

const Home = (props) => {
  return ( <h1> Welcome Home </h1>)
}

const About = (props) => {
  return ( <h1> Welcome About </h1>)
}

const Login = (props) => {
  return ( <h1> Login to access Dashboard </h1>)
}

const HomeLink=(props)=>{
  return (
    <ul>
        <li>
          <NavLink to="/home" exact activeStyle={
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
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn:false
    }
  }
  loginHandle = () => {
    const prevState=this.state;
    this.setState({loggedIn: !prevState.loggedIn}, ()=>{
      localStorage.setItem("loggedIn", this.state.loggedIn);
    });
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          {
            this.state.loggedIn &&
            <HomeLink />
          }
        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
        <Switch>
          <PublicRoute path="/" exact component={Login}/>
          <PrivateRoute path="/home" exact component={Home}/>
          <PrivateRoute path="/about" exact component={About}/>
          <PrivateRoute path="/user/:username" exact component={User}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
