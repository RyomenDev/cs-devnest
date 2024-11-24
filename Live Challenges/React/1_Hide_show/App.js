// https://reactchallenges.live/challenge/1

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(true);

  const HandleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <div class="box">
        <button onClick={HandleClick}>Show/Hide</button>
        <span id="text" style={{ display: toggle ? "block" : "none" }}>
          {" "}
          Welcome to React Challenges
        </span>
      </div>
    </div>
  );
}
