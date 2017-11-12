import React, { Component } from 'react';
import './NavButton.css';

import { NavLink } from 'react-router-dom';

class NavButton extends Component {
  render() {
    return (
      <NavLink className="NavButton" exact to={this.props.to} activeClassName="active">
        <img src={'/static/icons/' + this.props.icon + '.svg'} alt={this.props.label} />
        <div className="label">{this.props.label}</div>
      </NavLink>
    );
  }
}

export default NavButton;
