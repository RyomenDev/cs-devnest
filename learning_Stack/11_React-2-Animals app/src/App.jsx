import { useState } from 'react';
import AnimalShow from './AnimalShow.jsx';

import './App.css';

const getRandomAnimal = () => {
  const allAnimals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return allAnimals[Math.floor(Math.random() * allAnimals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleButtonClick = () => {
    const newAnimal = getRandomAnimal();
    const updatedAnimals = [...animals, newAnimal];
    setAnimals(updatedAnimals);
  };

  return (
    <div className="app">
      <button onClick={handleButtonClick}>Add Animal</button>

      <div className="animal-list">
        {animals.map((animal, index) => {
          return <AnimalShow key={index} type={animal} />;
        })}
      </div>
    </div>
  );
}

export default App;
