import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [bgWhite, setBgWhite] = useState("black");
  const [bgDark, setBgDark] = useState("light");
  const handleLightButtonClicked = () => {
    setBgWhite("#000000");
    console.log("light");
  };
  const handleDarkButtonClicked = () => {
    setBgDark("#fffff");
    console.log("dark");
  };
  return (
    <div className="header text-2xl font-bold header p-6 sticky top-0">
      <ul className="header-ul w-11/12 my-0 mx-auto  flex justify-between">
        <li>
          <Link to={"/"}>Where In The World ?</Link>
        </li>
        <li className="dark cursor-pointer flex">
          <button
            className="bg-blue-700 p-2 m-2"
            onClick={handleLightButtonClicked}
            style={{
              
            }}
          >
            Light
          </button>
          <button
            className="bg-blue-700 p-2 m-2"
            onClick={handleDarkButtonClicked}
          >
            Dark
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
