import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Shopping List
      </h1>
      <NewItem />
    </main>
  );
}