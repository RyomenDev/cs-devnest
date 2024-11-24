import React from "react";

import onlineIcon from "../../icons/onlineIcon.png"; // Import the online icon image

import "./TextContainer.css"; // Import the CSS for styling

// TextContainer component displays information about the app and a list of users currently online
const TextContainer = ({ users }) => (
  <div className="textContainer">
    {/* Static information about the chat application */}
    <div>
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>

    {/* Conditional rendering: display the list of users if there are any */}
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              // Map over the users array and display each user's name with an online icon
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
