const express = require("express"); // Import Express to create a router
const router = express.Router(); // Create a new router instance

// Define a GET route for the root URL
router.get("/", (req, res) => {
  // Send a response with a message indicating the server is running
  res.status(200).send({ response: "Server is up and running." });
});

// Export the router to be used in other parts of the application
module.exports = router;
