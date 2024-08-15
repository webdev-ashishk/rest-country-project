import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import { Link } from "react-router-dom";
import { AllCountryInterface, CountryType } from "./BodyType";
import ListOfAllCountry from "./ListOfAllCountry";
import ShimmerUIOfAllCountry from "./ShimmerUI";

function _filterCountryData(
  searchText: string | number,
  allCountry: CountryType[]
) {
  const filterCountryData = allCountry.filter((country: CountryType) =>
    country.name.common
      ?.toLowerCase()
      ?.includes(searchText.toString().toLowerCase())
  );
  return filterCountryData;
}

async function _filterSelectedCountryRegion(
  selectedRegion: string,
  allCountry: CountryType[]
) {
  const selectedCountryData = allCountry.filter((country: CountryType) =>
    country?.region?.toLowerCase()?.includes(selectedRegion.toLowerCase())
  );
  return selectedCountryData;
}
function _getUniqueRegions(allCountry: CountryType[]) {
  const regions = allCountry.map((country) => country.region);
  const uniqueRegions = new Set(regions);
  return Array.from(uniqueRegions);
}
const Body = () => {
  // const [allCountry, setAllCountry] = useState(null);
  const [allCountry, setAllCountry] = useState<CountryType[]>([]);
  const [filterCountry, setFilterCountry] = useState<CountryType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>(
    "filter by regions ..."
  );

  const [backToTheTop, setBackToTheTop] = useState<boolean>(false);
  // This useEffect for api call
  useEffect(() => {
    fetchAllCountry();
  }, []);
  // This useEffect for drop down
  useEffect(() => {
    console.log("useEffect-2 called!");
    searchCountryBasedOnRegion(selectedRegion, allCountry);
  }, [selectedRegion]);
  const fetchAllCountry = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const json: CountryType[] = await data.json();
      setAllCountry(json);
      setFilterCountry(json);
    } catch (error) {
      setErrorMessage("no country found... " + JSON.stringify(error));
    }
  };
  // console.log(allCountry);
  // console.log(JSON.stringify(filterCountry));
  const searchCountryData = (
    searchText: string | number,
    allCountry: CountryType[]
  ) => {
    if (searchText !== "") {
      const filterData = _filterCountryData(searchText, allCountry);
      setFilterCountry(filterData);
      setErrorMessage("");
      if (searchText == "") {
        setFilterCountry(filterData);
      }
      if (filterData.length === 0) {
        setErrorMessage("no country data found!");
      } else {
        setErrorMessage("");
        setFilterCountry(filterData);
      }
    }
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value.toLowerCase();
    setSelectedRegion(value);
  };

  // console.log("selected regions: " + selectedRegion);

  const searchCountryBasedOnRegion = async (
    selectedRegion: string,
    allCountry: CountryType[]
  ) => {
    const data: CountryType[] = await _filterSelectedCountryRegion(
      selectedRegion,
      allCountry
    );
    setFilterCountry(data);
    // console.log("without stringify a object " + data);
  };

  // back to the top
  window.addEventListener("scroll", () => {
    console.log(window.scrollY + "px");
    if (window.scrollY >= 550) {
      // console.log("done");
      setBackToTheTop(true);
    } else if (window.screenY < 550) {
      setBackToTheTop(false);
    }
  });
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling
    });
  };
  const allUniqueRegions = _getUniqueRegions(allCountry);
  if (allCountry.length === 0) return <ShimmerUIOfAllCountry />;
  if (errorMessage) return <p>{errorMessage}</p>;
  return (
    <div className="w-11/12 my-5 mx-auto">
      <div className="body-top flex justify-between mx-10 font-serif">
        <div className="flex items-center max-w-lg mx-auto">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full search-input-box-size">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="country name ..."
              required
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <button
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              searchCountryData(searchText, allCountry);
            }}
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
        </div>

        {/* DROP-DOWN down */}
        <label htmlFor="region"> Filter By Region </label>
        <select
          className="bg-gray-700 p-2 mx-2 my-auto w-[200px]"
          id="region"
          name="dropdown"
          onChange={handleRegionChange}
        >
          {allUniqueRegions.map((region, index) => (
            <option key={index}>{region}</option>
          ))}
        </select>
      </div>
      <div className="body-last flex flex-wrap justify-evenly">
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
              <ListOfAllCountry key={countryData.key} {...countryData} />
            </Link>
          );
        })}
      </div>
      {/* back to top  */}
      {backToTheTop && (
        <p className="back-to-top" onClick={handleScroll}>
          <div className="to-top">
            <button>
              <GoMoveToTop />
            </button>
          </div>
        </p>
      )}
    </div>
  );
};

export default Body;
