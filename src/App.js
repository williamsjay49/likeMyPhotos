import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function getRandomColor() {
  // Generate random values for red, green, and blue components
  var r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  var g = Math.floor(Math.random() * 256); // Random value between 0 and 255
  var b = Math.floor(Math.random() * 256); // Random value between 0 and 255

  // Construct the RGB color string
  var color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}

const buttonsInfo = [
  { id: crypto.randomUUID(), text: "Click me", color: "#541388" },
  { id: crypto.randomUUID(), text: "Click him", color: "#d90368" },
  { id: crypto.randomUUID(), text: "Click her", color: "#2e294e" },
];

function App() {
  const [bgColor, setBgColor] = useState("#dae7f5");

  const handleElements = (id) => {
    buttonsInfo.map((a) => {
      return a.id === id
        ? ((a.color = getRandomColor()), setBgColor(getRandomColor()))
        : null;
    });
  };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Title />
      {buttonsInfo.map(({ id, text, color }) => {
        return (
          <Button
            id={id}
            text={text}
            handleElements={handleElements}
            buttonColor={color}
          />
        );
      })}
    </div>
  );
}

function Title() {
  return <h1>Randomizer</h1>;
}

function Button({ id, handleElements, buttonColor, text }) {
  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={() => handleElements(id)}
    >
      {text}
    </button>
  );
}

export default App;
