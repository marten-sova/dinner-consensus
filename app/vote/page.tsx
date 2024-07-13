"use client";
import { useState } from "react";
import {
  cuisineList,
  CuisineList,
  cuisineDict,
  CuisineDict,
} from "../lib/cuisines";

export default function Vote() {
  const [cuisines, setCuisines] = useState<CuisineDict>(cuisineDict);

  const handleRatingChange = (cuisine: string, rating: number) => {
    setCuisines((prev) => ({
      ...prev,
      [cuisine]: rating,
    }));
    console.log(cuisines);
  };

  const handleSubmit = () => {
    console.log(cuisines);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl">What should we eat?</h1>
        <ul>
          {cuisineList.map((cuisine) => (
            <li
              key={cuisine}
              className="my-2 flex justify-between items-center bg-white p-1 rounded"
            >
              <span className="text-left">{cuisine}</span>
              <div className="flex space-x-2">
                <label
                  className={`p-1 rounded ml-2 ${
                    cuisines[cuisine] === 3 ? "bg-green-200" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={cuisine}
                    value="3"
                    checked={cuisines[cuisine] === 3}
                    onChange={() => handleRatingChange(cuisine, 3)}
                    className="hidden"
                  />
                  <span
                    className="cursor-pointer"
                    role="img"
                    aria-label="dislike"
                  >
                    😞
                  </span>
                </label>
                <label
                  className={`p-1 rounded ml-2 ${
                    cuisines[cuisine] === 2 ? "bg-green-200" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={cuisine}
                    value="2"
                    checked={cuisines[cuisine] === 2}
                    onChange={() => handleRatingChange(cuisine, 2)}
                    className="hidden"
                  />
                  <span
                    className="cursor-pointer"
                    role="img"
                    aria-label="neutral"
                  >
                    😐
                  </span>
                </label>

                <label
                  className={`p-1 rounded ml-2 ${
                    cuisines[cuisine] === 1 ? "bg-green-200" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={cuisine}
                    value="1"
                    checked={cuisines[cuisine] === 1}
                    onChange={() => handleRatingChange(cuisine, 1)}
                    className="hidden"
                  />
                  <span className="cursor-pointer" role="img" aria-label="like">
                    😊
                  </span>
                </label>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </main>
  );
}
