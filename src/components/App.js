import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Recipe from './Recipe';
import Test from './Test';
import '../assets/styles/global.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/test" render={() => <Test />} />
        <Route path="/:id" render={() => <Recipe />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    )
  }
}

export default App;