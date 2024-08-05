import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
// TypeScript interfaces for API response

interface Flag {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Car {
  signs: string[];
  side: "left" | "right";
}

interface Currency {
  [key: string]: {
    name: string;
    symbol?: string;
  };
}

interface Demonyms {
  eng: {
    f: string;
    m: string;
  };
  fra: {
    f: string;
    m: string;
  };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
}

interface Translations {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface CountryData {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: {
    latlng: [number, number];
  };
  car: Car;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: CoatOfArms;
  continents: string[];
  currencies: Currency;
  demonyms: Demonyms;
  fifa: string;
  flag: string; // Unicode emoji flag
  flags: Flag;
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: [number, number];
  maps: Maps;
  name: Name;
  population: number;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Translations;
  unMember: boolean;
}

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
      setCountryData(data);
    } catch (error) {
      console.error("Failed to fetch country data:", error);
    }
  };

  if (!countryData) return <div>Loading...</div>;

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
  function handleBackButtonClicked() {
    console.log("btn clicked!");
  }
  return (
    <div className="w-11/12 mx-auto my-0">
      <Link to={"/"}>
        <button className="bg-blue-400 p-3 rounded-lg w-32 font-bold text-2xl flex justify-between items-center mt-11">
          <FaLongArrowAltLeft />
          Back
        </button>
      </Link>

      <div className="countryCart  flex mt-36">
        <div className="left w-1/3">
          <img src={flag} alt="flag" className="w-[99%]" />
        </div>
        <div className="right w-1/3 pl-20 pt-10">
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

// const CountryNameCart = () => {
//   const { countryName } = useParams<{ countryName: string }>();
//   const [countryData, setCountryData] = useState<CountryData | null>(null);

//   useEffect(() => {
//     fetchSingleCountryData();
//   }, [countryName]);
//   const fetchSingleCountryData = async () => {
//     const data = await fetch(
//       `https://restcountries.com/v3.1/name/${countryName}`
//     );
//     const json = await data.json();
//     setCountryData(json);
//   };
//   console.log(countryData);
//   if (!countryData) return <div>Loading...</div>;
//   //destrucuring
//   const {
//     flags: { svg: flag },
//     population,
//     region,
//     subregion,
//     capital,
//     tld,
//     currencies,
//     languages,
//   } = countryData;

//   return (
//     <div>
//       <button>Back</button>
//       <div className="countryCart bg-blue-400">
//         <div className="left">
//           <img src={flag} alt="flag" />
//         </div>
//         <div className="right">
//           <h1>{countryName}</h1>
//           <ul>
//             <li>population : {countryData.population}</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CountryNameCart;
