import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get("/api/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AR Interior Designer</h1>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="border p-4">
            <img src={item.imageUrl} alt={item.name} className="mb-2" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-2 bg-blue-500 text-white px-4 py-2"
            >
              View in AR
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="ar-viewer">
          <iframe
            src={`ar.html?imageUrl=${selectedItem.imageUrl}`}
            title="AR Viewer"
            className="w-full h-96"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default App;
