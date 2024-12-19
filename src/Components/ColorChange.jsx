import React, { useState } from "react";

const ColorChange = (props) => {
  const [color, setColor] = useState("Black");

  const handleGreen = () => {
    setColor ("Green");
  }

  const handleYellow = () => {
    setColor("Yellow");
  }

  const handleOrange = () => {
    setColor("Orange");
  }
  
  const handleBlue = () => {
    setColor("Blue");
  }

  const handleRed = () => {
    setColor("Red");
  }

  const handleTeel = () => {
    setColor("Teal");
  }

  return (
    <>
    <div className="app_wrap" style={{backgroundColor:color}}>
      <button style={{backgroundColor:"green" , fontWeight:"Bold" , border: "2px solid white"}} className="green" onClick={handleGreen}>Green</button>
      <button style={{backgroundColor:"yellow" , fontWeight:"Bold" , border: "2px solid white"}} className="yellow" onClick={handleYellow}>Yellow</button>
      <button style={{backgroundColor:"orange" , fontWeight:"Bold" , border: "2px solid white"}} className="orange" onClick={handleOrange}>Orange</button>
      <button style={{backgroundColor:"blue" , fontWeight:"Bold" , border: "2px solid white"}} className="blue" onClick={handleBlue}>Blue</button>
      <button style={{backgroundColor:"red" , fontWeight:"Bold" , border: "2px solid white"}} className="red" onClick={handleRed}>Red</button>
      <button style={{backgroundColor:"teal" , fontWeight:"Bold" , border: "2px solid white"}} className="teal" onClick={handleTeel}>Teel</button>

    </div>
    </>
  );
};

export default ColorChange;
