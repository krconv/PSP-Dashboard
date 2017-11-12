import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
        <div className="profile">
          <div className="mask">
            <img className="avatar" src="./static/media/profile.png" alt="Profile" />
          </div>
          <div className="name">Ben Hylak</div>
          <div className="title">SpaceX</div>
        </div>
        <a className="leave" href="/sign-out">
          <div className="label">Sign Out</div>
          <img className="icon" src="/static/icons/leave.svg" alt="Sign Out" />
        </a>
      </div>
    );
  }
}

export default ProfileCard;
