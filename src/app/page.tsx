import { Sidebar } from "@/components/shared";

export default function Home() {
  return (
    <main className="grid grid-cols-3">
      <div className="flex flex-col items-end">
        <Sidebar />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
      <div className="col-span-1">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
    </main>
  );
}
