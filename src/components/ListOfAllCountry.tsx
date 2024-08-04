import React from "react";
interface AllCountryInterface {}
interface FlagInteface {
  png: string;
  svg: string;
}
interface AllCountryInterface {
  flags: FlagInteface;
  name: string;
  population: number;
  region: string;
  capital?: string[];
}

const ListOfAllCountry: React.FC<AllCountryInterface> = ({
  flags,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <div className="cart w-[240px] mx-10 my-10 rounded-lg">
      <img
        src={flags.png}
        alt="this is flag"
        className="rounded-t-lg h-[180px] w-[240px]"
      />
      <div className="p-6 h-[180px]">
        <h1 className="font-bold my-2 text-[1.2rem]"> {name}</h1>
        <ul>
          <li>Population :{population}</li>
          <li>Region :{region}</li>
          <li>
            Capital :{capital ? capital.join(", ") : "No capital available"}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ListOfAllCountry;
