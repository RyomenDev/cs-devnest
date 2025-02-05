import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    {/* Left side of the InfoBar displaying the room name and online status */}
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>

    {/* Right side of the InfoBar with a close button to leave the chat */}
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
