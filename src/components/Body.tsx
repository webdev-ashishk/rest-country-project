import React, { useEffect, useState } from "react";
import ListOfAllCountry from "./ListOfAllCountry";
type CountryType = {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  subregion: string;
  population: number;
  capital?: string[];
  languages?: { [key: string]: string };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  // Add other fields as needed based on API response
};
interface AllCountryInterface {
  name: string; // Adjusted to a string, assuming that's what ListOfAllCountry expects
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  subregion: string;
  population: number;
  capital?: string[];
  languages?: { [key: string]: string };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  key: string; // Or another appropriate unique identifier
}

const Body = () => {
  // const [allCountry, setAllCountry] = useState(null);
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    fetchAllCountry();
  }, []);
  const fetchAllCountry = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    setAllCountry(json);
  };
  console.log(allCountry);
  // if (!allCountry) return <div>loading...</div>;
  if (allCountry.length === 0) return <div>loading...</div>;
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
      <div className="body-last border-2 flex flex-wrap justify-center aligen-center">
        {allCountry.map((country: CountryType) => {
          const countryData: AllCountryInterface = {
            name: country.name.common, // Use the common name if that's what you need
            cca2: country.cca2,
            cca3: country.cca3,
            ccn3: country.ccn3,
            cioc: country.cioc,
            flags: country.flags,
            region: country.region,
            subregion: country.subregion,
            population: country.population,
            capital: country.capital,
            languages: country.languages,
            currencies: country.currencies,
            key: country.cca3, // Or another unique identifier
          };
          return <ListOfAllCountry key={countryData.cca3} {...countryData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
