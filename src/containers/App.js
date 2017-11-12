import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './Home';
import Families from './Families';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
              <NavLink exact to="/families" activeClassName="active">Families</NavLink>
            </nav>
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/families" component={Families} />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
