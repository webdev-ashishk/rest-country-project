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
    <div className="cart w-[250px] mx-10 my-10 rounded-sm">
      <img src={flags.png} alt="this is flag" className="h-[200px] w-[250px]" />
      <div className="p-8">
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
