export type CountryType = {
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
export interface AllCountryInterface {
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