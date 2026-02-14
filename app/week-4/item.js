export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500 mt-1 capitalize">
            Category: {category}
          </p>
        </div>
        <div className="ml-4">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Buy {quantity}
          </span>
        </div>
      </div>
    </li>
  );
}