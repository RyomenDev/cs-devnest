import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Initialize the state for cities
  const [cities, setCities] = useState([]);
  const [cityInput, setCityInput] = useState("");

  // Function to add a city to the list
  const addCity = () => {
    if (cityInput) {
      setCities([...cities, cityInput]);
      setCityInput(""); // Clear the input field after adding
    }
  };

  // Function to remove a specific city from the list
  const removeCity = (cityToRemove) => {
    setCities(cities.filter((city) => city !== cityToRemove));
  };

  // Function to handle changes in the textarea
  const handleChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div className="App">
      <input
        id="text-area"
        className="text-area"
        placeholder="City Name..."
        value={cityInput}
        onChange={handleChange}
      ></input>
      <button className="button" onClick={addCity}>
        Add
      </button>
      <div className="show-city">
        {cities.map((city, index) => (
          <div key={index} className="city-item">
            <span>{city}</span>
            <button className="remove-button" onClick={() => removeCity(city)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
