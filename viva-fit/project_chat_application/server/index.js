// Import required modules
const http = require("http"); // Core module to create an HTTP server
const express = require("express"); // Express framework for building web applications
const socketio = require("socket.io"); // Socket.IO for real-time communication
const cors = require("cors"); // CORS middleware to enable Cross-Origin Resource Sharing

// Import utility functions for managing users
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

// Import the router to handle HTTP routes
const router = require("./router");

// Initialize Express and create an HTTP server
const app = express();
const server = http.createServer(app);

// Attach Socket.IO to the server
const io = socketio(server);

// Use CORS middleware to handle cross-origin requests
app.use(cors());

// Use the router for handling HTTP requests
app.use(router);

// io.on(
//   "connect",
//   (socket) => {
//     console.log("socket-connect", socket.id);
//   }

// Setup event listeners for Socket.IO connections
io.on("connect", (socket) => {
  console.log("socket-connect", socket.id); // Log when a new socket connects

  // Event listener for when a user joins a room
  socket.on("join", ({ name, room }, callback) => {
    console.log("Backend received join event:", { name, room }); // Log the join event with user name and room

    // Add the user to the room
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error); // If there's an error, send it back to the client

    // Join the specified room
    socket.join(user.room);

    // Send a welcome message to the user who joined
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });

    // Broadcast to everyone in the room (except the user who joined) that a new user has joined
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined!`,
    });

    // Update room data for everyone in the room
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback(); // Execute the callback to acknowledge the event
  });

  // Event listener for when a user sends a message
  //   socket.on("sendMessage", ({ message, name, room }, callback) => {
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id); // Get the user who sent the message

    if (!user) {
      console.error("Error: User not found for socket ID:", socket.id);
      return callback({ error: "User not found" });
    }
    console.log("socket-sendMessage", message, user.name, user.room); // Log the sendMessage event

    // Emit the message to everyone in the room
    // io.to(room).emit("message", { user: name, text: message });
    io.to(user.room).emit("message", { user: user.name, text: message });

    callback(); // Execute the callback to acknowledge the event
  });

  // Event listener for when a user disconnects
  socket.on("disconnect", () => {
    console.log("socket-disconnect"); // Log when a socket disconnects

    const user = removeUser(socket.id); // Remove the user from the room

    if (user) {
      // Notify everyone in the room that the user has left
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });

      // Update room data for everyone in the room
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

// Define the port to listen on (use environment variable or default to 5000)
const PORT = process.env.PORT || 5000;

// Start the server and log that it has started
server.listen(PORT, () => console.log(`Server has started at ${PORT}.`));
