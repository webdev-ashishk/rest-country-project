import React, { useEffect, useState } from "react";
import ListOfAllCountry from "./ListOfAllCountry";

const Body = () => {
  const [allCountry, setAllCountry] = useState(null);

  useEffect(() => {
    fetchAllCountry();
  }, []);
  const fetchAllCountry = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    setAllCountry(json);
  };
  console.log(allCountry);
  if (!allCountry) return <div>loading...</div>;
  return (
    <div className="w-11/12 my-5 mx-auto">
      <div className="body-top flex justify-between">
        {/* <IoSearchOutline /> */}
        <input
          type="text"
          name="search"
          id=""
          placeholder="search..."
          className="p-1  bg-gray-700"
        />
        <button className="bg-gray-700 p-2 m-2">Filter By Region</button>
      </div>
      <div className="body-last border-2 mt-5">
        <ListOfAllCountry />
      </div>
    </div>
  );
};

export default Body;
