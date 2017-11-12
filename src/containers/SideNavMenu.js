import React, { Component } from 'react';
import './SideNavMenu.css';

import ProfileCard from '../components/ProfileCard';
import NavButton from '../components/NavButton';

class SideNavMenu extends Component {
  render() {
    return (
      <div className="SideNavMenu">
        <ProfileCard />
        <NavButton to="/" label="Home" icon="home" />
        <NavButton to="/families" label="Families" icon="family" />
        <NavButton to="/messages" label="Messages" icon="mail" />
      </div>
    );
  }
}
export default SideNavMenu;
