import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import "./Messages.css";

// The Messages component receives the 'messages' array and the 'name' of the current user
// Defaults are provided in case messages or name are not passed
const Messages = ({ messages = [], name = "" }) => (
  <ScrollToBottom className="messages">
    {/* Iterate over each message in the array */}
    {messages.map((message, i) => (
      <div key={i}>
        {/* Pass the individual message and the user's name to the Message component */}
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
