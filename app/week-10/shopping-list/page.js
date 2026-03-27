"use client";

import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import { getItems, addItem } from "../_services/shopping-list-service";
import MealIdeas from "./MealIdeas";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const [items, setItems] = useState([]);
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) return;
    const loadItems = async () => {
      const data = await getItems(user.uid);
      setItems(data);
    };
    loadItems();
  }, [user]);

  // Redirect to landing page if user is not logged in
  if (!user) {
    router.push("/week-10");
    return null;
  }

  // Event handler to add new item to the list
  async function handleAddItem(newItem) {
    const { id: _unused, ...itemWithoutId } = newItem;
    const id = await addItem(user.uid, itemWithoutId);
    setItems([...items, { id, ...itemWithoutId }]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .replace(/[^\x00-\x7F]/g, "")
      .trim();

    setSelectedItemName(cleanedName);
  }

  async function handleSignOut() {
    await firebaseSignOut();
    router.push("/week-10");
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

          {/* ItemList */}
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
