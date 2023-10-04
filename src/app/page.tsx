import { Navbar, Sidebar } from "@/components/shared";
import { PostForm } from "@/components/shared/tweets";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-x-20">
      <div className="flex flex-col items-end">
        <Sidebar />
      </div>
      <div className="flex flex-col border-r-[1px] border-l-[1px] border-gray-600 h-screen">
        <header className="flex flex-col w-full border-b-[1px] border-gray-600 px-5 py-2 h-28 sticky">
          <h1 className="font-semibold text-xl">Inicio</h1>
          <Navbar />
        </header>
        <section className="flex flex-col  border-b-[1px] border-gray-600">
          <PostForm />
        </section>
        <section></section>
      </div>
      <div className="col-span-1">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
    </main>
  );
}
