"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort a copy of the items prop — never mutate the original prop
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);       // alphabetical by name
    } else {
      return a.category.localeCompare(b.category); // alphabetical by category
    }
  });

  return (
    <div className="w-full">

      {/* Sort Buttons */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2.5 font-medium rounded-md transition-colors duration-200 ${
            sortBy === "name"
              ? "bg-blue-700 dark:bg-blue-600 text-white"
              : "bg-blue-200 dark:bg-gray-700 text-blue-800 dark:text-blue-300 hover:bg-blue-300 dark:hover:bg-gray-600"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2.5 font-medium rounded-md transition-colors duration-200 ${
            sortBy === "category"
              ? "bg-blue-700 dark:bg-blue-600 text-white"
              : "bg-blue-200 dark:bg-gray-700 text-blue-800 dark:text-blue-300 hover:bg-blue-300 dark:hover:bg-gray-600"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Item List */}
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}