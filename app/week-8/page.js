"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import MealIdeas from "./MealIdeas";

export default function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState("");
  // Event handler to add new item to the list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0] // remove ", 1 kg 🍗" part
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "") // remove emojis
      .replace(/[^\x00-\x7F]/g, "") // remove remaining non-ASCII
      .trim(); // remove leading/trailing spaces

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen flex items-center flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <h1 className="text-4xl py-4 font-bold text-gray-800 dark:text-white text-center">
        Shopping List + Meal Ideas
      </h1>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Left side — NewItem form + ItemList */}
        <div className="flex-1 flex flex-col gap-4">
          {/* NewItem Form */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 outline dark:outline-gray-700 rounded-lg">
            <NewItem onAddItem={handleAddItem} />
          </div>

          {/* ItemList — now receives onItemSelect */}
          <div className="flex justify-center">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        {/* Right side — MealIdeas */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
