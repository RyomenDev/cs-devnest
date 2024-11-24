import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    {/* Input field for typing a message */}
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)} // Update message state when input changes
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      } // Send message on Enter key press
    />

    {/* Button to send the message */}
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
