"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add new item to the list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen flex items-center flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="w-2/3 mx-auto flex items-center flex-col">
        <h1 className="text-4xl py-4 font-bold text-gray-800 dark:text-white text-center">
          Shopping List
        </h1> 
 
          {/* ItemList */}
          <div className="w-full flex justify-center">
            <ItemList items={items} />
          </div>
        </div>
    </main>
  );
}