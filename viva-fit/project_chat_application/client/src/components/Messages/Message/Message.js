import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

// The Message component is responsible for rendering individual chat messages.
// It receives 'message' and 'name' as props.
// 'message' is an object containing 'text' (the message content) and 'user' (the sender's name).
// 'name' is the name of the current user.

const Message = ({ message: { text = "", user = "" }, name = "" }) => {
  let isSentByCurrentUser = false;

  // Trim the current user's name and convert it to lowercase for consistent comparison.
  const trimmedName = name.trim().toLowerCase();

  // Check if the message was sent by the current user.
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  // Render the message differently based on whether it was sent by the current user or another user.
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      {/* Display the current user's name */}
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        {/* Display the message text with emojis */}
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        {/* Display the message text with emojis */}
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      {/* Display the sender's name */}
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
