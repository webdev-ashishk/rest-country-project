import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundColorChanger from "./BackgroundColorChanger";
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
  const [filterCountry, setFilterCountry] = useState([]);
  const [searchText, setSearchText] = useState<string>("");
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    // Generate a random color
    setBgColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };
  // Update the CSS variable
  document.documentElement.style.setProperty("--app-background-color", bgColor);
  useEffect(() => {
    fetchAllCountry();
  }, []);
  const fetchAllCountry = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    setAllCountry(json);
    setFilterCountry(json);
  };
  console.log(allCountry);
  console.log(filterCountry);
  // if (!allCountry) return <div>loading...</div>;
  if (allCountry.length === 0) return <div>loading...</div>;
  return (
    <div className="w-11/12 my-5 mx-auto">
      <BackgroundColorChanger />
      <div className="body-top flex justify-between mx-10 font-serif">
        <form className="flex items-center max-w-lg mx-auto">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="country name ..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>

        {/* drop down */}
        <select className="bg-gray-700 p-2 m-2">
          <option value="1">love</option>
          <option value="2">wow</option>
          <option value="3">dumm</option>
          <option value="4">genius</option>
        </select>
      </div>
      <div className="body-last flex flex-wrap">
        {filterCountry.map((country: CountryType) => {
          const countryData: AllCountryInterface = {
            name: country.name.common,
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
          return (
            <Link to={`/name/${countryData.name}`}>
              <ListOfAllCountry key={countryData.ccn3} {...countryData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
