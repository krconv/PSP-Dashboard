import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Families from './Families';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="App">
          <nav>
            <Link exact to="/">Home</Link>
            <Link exact to="/families">Families</Link>
          </nav>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/families" component={Families} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
