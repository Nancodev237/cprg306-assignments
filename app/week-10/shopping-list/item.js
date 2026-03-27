export default function Item({ id, name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-center m-6">
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-800 dark:text-white capitalize">
            {name}
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mt-2 mb-2 capitalize">
            Quantity: {quantity}
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mt-2 mb-2 capitalize">
            Category: {category}
          </p>
        </div>
      </div>
    </li>
  );
}
