import  { useState } from "react";

const BackgroundColorChanger = () => {
  // State to hold the current background color
  const [bgColor, setBgColor] = useState("white");

  // Function to change the background color
  const changeColor = () => {
    // Change to a new random color or a predefined color
    setBgColor("#000000");
  };
  document.documentElement.style.setProperty("--app-background-color", bgColor);
  return (
    <div>
      {/* Div with dynamic background color */}
      <div style={{ backgroundColor: bgColor, height: "100px", width: "100%" }}>
        <p>The background color is: {bgColor}</p>
      </div>
      {/* Button to trigger background color change */}
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

export default BackgroundColorChanger;
