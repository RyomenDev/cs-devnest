import React from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* The main component that defines routes for your application */}
      <Router>
        <Routes>
          {/* Route for the Join component (main entry point) */}
          <Route path="/" element={<Join />} />

          {/* Route for the Chat component (chat room) */}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
