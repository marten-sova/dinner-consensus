export type CuisineList = string[];

export type CuisineDict = {
  [key: string]: number;
};

export const cuisineList: CuisineList = [
  "Italian",
  "Mexican",
  "Chinese",
  "Steakhouse",
  "Seafood",
  "Pub",
  "Sushi",
  "Burgers",
  "Indian",
  "Thai",
  "Vietnamese",
  "Korean",
  "Greek",
  "French",
  "Mediterranean",
  "Spanish",
  "Middle Eastern",
  "German",
];

export const cuisineDict: CuisineDict = cuisineList.reduce((acc, cuisine) => {
  acc[cuisine] = 2;
  return acc;
}, {} as CuisineDict);
