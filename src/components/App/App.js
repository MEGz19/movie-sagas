import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Home from '../Home/Home'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          {/* <p>Empty Page</p> */}
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/edit" component={Edit} />
      </Router>
    );
  }
}

export default connect()(App);