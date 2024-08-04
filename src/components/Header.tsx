import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-blue-400 text-2xl font-bold header p-3">
      <ul className="header-ul w-11/12 my-0 mx-auto  flex justify-between">
        <li>
          <Link to={"/"}>Where In The World ?</Link>
        </li>
        <li>light|Dark</li>
      </ul>
    </div>
  );
};
export default Header;
