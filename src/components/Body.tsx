import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  const [searchText, setSearchText] = useState("");
  const { countryName } = useParams();
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
  // if (!allCountry) return <div>loading...</div>;
  if (allCountry.length === 0) return <div>loading...</div>;
  return (
    <div className="w-11/12 my-5 mx-auto">
      <div className="body-top flex justify-between mx-10 font-serif">
        {/* <IoSearchOutline /> */}
        <input
          type="text"
          name="search"
          id=""
          placeholder="            search..."
          className="bg-gray-700 w-[30%] text-blue-400 font-bold text-[1.2rem]"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <p>{searchText}</p>
        <select className="bg-gray-700 p-2 m-2">
          <option value="1">love</option>
          <option value="2">wow</option>
          <option value="3">dumm</option>
          <option value="4">genius</option>
        </select>
      </div>
      <div className="body-last flex flex-wrap">
        {allCountry.map((country: CountryType) => {
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
