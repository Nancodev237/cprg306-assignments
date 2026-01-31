import GroceryItemList from './GroceryItemList';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Shopping List
        </h1>
        <GroceryItemList />
      </div>
    </main>
  );
}