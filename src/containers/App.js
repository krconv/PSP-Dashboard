import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import SideNavMenu from './SideNavMenu';

import Home from './Home';
import Families from './Families';

class App extends Component {
  constructor() {
    super();

    this.state = {
      families: [
        {
          surname: "Smith"
        },
        {
          surname: "Smith"
        },
        {
          surname: "Smith"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="page">
            <SideNavMenu></SideNavMenu>
            <main className="content">
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
