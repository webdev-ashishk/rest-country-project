import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import CountryCartShimmerUI from "./CountryCartShimmerUI";
import { CountryData } from "./CountryNameCartDataType";

// Example usage in a React component

const CountryNameCart: React.FC = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    fetchSingleCountryData();
  }, []);

  const fetchSingleCountryData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const [data] = await response.json(); // Destructure the first country object
      //alternative of line# 22
      /* 
 example 1.>>>>>> const data = (await response.json())[0];
example 2.>>>>>>> const jsonData = await response.json();
const data = jsonData[0];

      
      */
      setCountryData(data);
    } catch (error) {
      console.error("Failed to fetch country data:", error);
    }
  };

  if (!countryData) return <CountryCartShimmerUI />;

  // Destructure the required details from countryData
  const {
    flags: { svg: flag },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = countryData;

  return (
    <div className="w-11/12 mx-auto my-0 h-full">
      <Link to={"/"}>
        <button className="bg-blue-400 p-3 rounded-lg w-32 font-bold text-2xl flex justify-evenly items-center mt-11">
          <FaLongArrowAltLeft />
          Back
        </button>
      </Link>

      <div className="countryCart  flex flex-wrap justify-stretch mt-36 items-center">
        <div className="left ml-10">
          {/* <img src={flag} alt="flag" className="w-[99%] h-[80%]" /> */}
          <img src={flag} alt="flag" className="w-[300px] h-[300px]" />
        </div>
        <div className="right ml-10 p-10 border-blue-400 border-2 rounded-lg w-96">
          <h1 className="text-2xl">{countryName}</h1>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Subregion: {subregion}</p>
          <p>Capital: {capital.join(", ")}</p>
          <p>Top Level Domain: {tld.join(", ")}</p>
          <p>
            Currencies:{" "}
            {Object.values(currencies)
              .map((currency) => currency.name)
              .join(", ")}
          </p>
          <p>Languages: {Object.values(languages).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryNameCart;
