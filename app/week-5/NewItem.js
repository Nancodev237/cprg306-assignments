"use client";

import { useState } from "react";

export default function NewItem() {
  // Initialize state variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle form submission
  function handleSubmit(event) {
    // Prevent page reload
    event.preventDefault();

    // Create item object
    const item = { name, quantity, category };

    // Log item to console
    console.log(item);

    // Alert user with item details
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset state back to defaults
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-2">Add New Item</h2>

      {/* Name Field */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g. Apples"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Quantity and Category Row */}
      <div className="flex gap-4">

        {/* Quantity Field */}
        <div className="flex flex-col gap-1 w-1/3">
          <label className="text-sm font-medium text-gray-600">Quantity</label>
          <input
            type="number"
            value={quantity}
            min={1}
            max={99}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category Field */}
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-gray-600">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-2 py-2 px-4 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
      >
        +
      </button>
    </form>
  );
}