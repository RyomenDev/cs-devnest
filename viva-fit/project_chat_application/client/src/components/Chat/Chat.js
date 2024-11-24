import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";

// The endpoint where your backend server is running
const ENDPOINT = "http://localhost:5000"; // Ensure this matches the backend URL

let socket; // Declare the socket variable

const Chat = () => {
  const location = useLocation(); // Use React Router's useLocation hook to access query parameters

  // State variables to manage the chat's data
  const [name, setName] = useState(""); // User's name
  const [room, setRoom] = useState(""); // Chat room name
  const [users, setUsers] = useState(""); // List of users in the chat room
  const [message, setMessage] = useState(""); // Current message being typed
  const [messages, setMessages] = useState([]); // List of messages in the chat

  useEffect(() => {
    console.log("useEffect triggered for join");

    // Initialize the socket connection
    socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    // Parse the query string to extract the name and room from the URL
    const { name, room } = queryString.parse(location.search);
    console.log("Joining with:", { name, room });

    // Set the room and name states with the parsed values
    setRoom(room);
    setName(name);
    // console.log("name-room", name, room);

    // Emit an event to join the room with the user's name and room
    console.log("going in emit");

    socket.emit("join", { name, room }, (error) => {
      console.log("emit-sending joining info", name, room);

      if (error) {
        console.error("Error joining room:", error);
        alert(error); // Display an error message if there's an issue joining the room
      }
    });
    console.log("exiting emit");

    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      if (socket) {
        console.log("Disconnecting socket...");
        socket.disconnect(); // Disconnects the socket
      }
    };
  }, [location.search]); // Effect depends on the location.search to re-run when it changes

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]); // Append the new message to the messages state
    });

    // Listen for room data updates (e.g., list of users in the room)
    socket.on("roomData", ({ users }) => {
      setUsers(users); // Update the users state with the latest room data
    });

    // Cleanup listeners when the component unmounts
    return () => {
      console.log("Cleaning up listeners...");
      socket.off("message");
      socket.off("roomData");
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const sendMessage = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (message) {
      console.log("Sending message:", message, name, room);
      //   socket.emit("sendMessage", { message, name, room }, () => setMessage("")); // Emit the message and clear the input field
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div>Hello chat room</div>
      <div className="container">
        {/* Component to show the room name and any additional info */}
        <InfoBar room={room} />

        {/* Component to display the list of messages */}
        <Messages messages={messages} name={name} />

        {/* Input field for typing and sending messages */}
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>

      {/* Component to display the list of users in the room */}
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
