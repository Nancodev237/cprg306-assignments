"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  // Initialize state variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle form submission
  function handleSubmit(event) {
    // Prevent page reload
    event.preventDefault();

    // Generate a random id
    const id = crypto.randomUUID();

    // Create item object
    const item = { id, name, quantity, category };

    // Log item to console
    console.log(item);

    // Call the prop
    onAddItem(item);

    // Reset state back to defaults
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex-col items-center space-y-6 p-6"
    >
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
        Add New Item
      </h2>

      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g. Apples"
          className={`w-full p-2 placeholder:text-gray-400 dark:placeholder:text-gray-500 
            border border-gray-300 dark:border-gray-600 
            rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500
            bg-white dark:bg-gray-700 
            ${name ? "text-gray-600 dark:text-gray-100" : "font-normal text-gray-400 dark:text-gray-400"}`}
        />
      </div>

      {/* Quantity Field */}
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor="quantity"
          className="text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          Quantity (1-20)
        </label>
        <p>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Current:
          </span>
          <span className="text-lg pl-2 font-medium text-gray-800 dark:text-white">
            {quantity}
          </span>
        </p>
        <div className="flex gap-4">
          {/* Fixed typo: type="buttom" → type="button" */}
          <button
            type="button"
            onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}
            className="h-10 box-border py-2 px-4 bg-gray-600 dark:bg-gray-500 text-white font-bold text-lg rounded-md hover:bg-gray-700 dark:hover:bg-gray-400 active:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => quantity < 20 ? setQuantity(quantity + 1) : setQuantity(20)}
            className="h-10 box-border py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white font-bold text-lg rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Category Field */}
      <div className="flex flex-col gap-1 flex-1">
        <label
          htmlFor="category"
          className="text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 text-gray-600 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-700"
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

      {/* Submit Button */}
      <button
        type="submit"
        className="mb-2 w-full h-10 box-border py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white font-bold text-lg rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
      >
        Add Item
      </button>
    </form>
  );
}