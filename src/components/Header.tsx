import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleDarkButtonClicked = () => {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#1e2c34";
  };
  const handleLightButtonClicked = () => {
    document.body.style.color = "";
    document.body.style.backgroundColor = "#c1cdd1";
  };
  return (
    <div className="header text-2xl font-bold header p-6 sticky top-0">
      <ul className="header-ul w-11/12 my-0 mx-auto  flex justify-between items-center">
        <li>
          <Link to={"/"}>Where In The World ?</Link>
        </li>
        <li className="dark cursor-pointer flex">
          <button
            className="bg-blue-700 p-2 m-2"
            onClick={handleLightButtonClicked}
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
