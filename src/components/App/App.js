import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route } from 'react-router-dom';
import Projects from '../Projects/Projects'
import Admin from '../Admin/Admin';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Projects} />
        <Route path='/admin' component={Admin} />
      </div>
      </Router>
    );
  }
}

export default connect()(App);
