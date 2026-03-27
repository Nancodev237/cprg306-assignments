"use client";

import { useState, useEffect } from 'react';

export async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Meal Ideas for{" "}
        <span className="text-blue-600 dark:text-blue-400 capitalize">
          {ingredient || "..."}
        </span>
      </h2>

      {/* Show prompt if no ingredient selected yet */}
      {!ingredient && (
        <p className="text-gray-500 dark:text-gray-400 italic">
          Click an item from your shopping list to see meal ideas.
        </p>
      )}

      {/* Show message if API returned no meals */}
      {ingredient && meals.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 italic">
          No meal ideas found for &quot;{ingredient}&quot;.
        </p>
      )}

      {/* Render list of meals */}
      <ul className="space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm"
          >
            {/* Meal thumbnail */}
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded-md object-cover"
            />
            {/* Meal name */}
            <p className="text-gray-800 dark:text-white font-medium">
              {meal.strMeal}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
