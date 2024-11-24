import React, { useState } from "react";
import "./styles.css";
import ProgressBar from "./progress-bar.component";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [value, setValue] = useState(0);
  const setValuer = (e) => {
    // console.log(e.target.value);
    if (e.target.value <= 100 && e.target.value >= 0) setValue(e.target.value);
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        {/* <ProgressBar width={val} /> */}
        <div className="App">
          <ProgressBar completed={value} />
        </div>
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input
            min={0}
            max={100}
            type="number"
            onChange={setValuer}
            placeholder={value}
          />
        </form>
      </div>
    </>
  );
}
