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

export interface CountryData {
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
