import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
        <div className="mask">
          <img className="profile" src="./static/media/profile.png" alt="Profile" />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
