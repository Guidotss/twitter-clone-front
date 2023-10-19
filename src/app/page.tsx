import { CommentModal, TweetsList } from "@/components";
import { Navbar, Sidebar } from "@/components/shared";
import { PostForm } from "@/components/shared/tweets";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col border-r-[1px] border-l-[1px] border-gray-600 h-full min-h-screen w-full lg:col-span-2 2xl:col-span-1">
        <header className="flex flex-col w-full border-b-[1px] border-gray-600 px-5 py-2 h-28 sticky">
          <h1 className="font-semibold text-xl">Inicio</h1>
          <Navbar />
        </header>
        <section className="flex flex-col border-b-[1px] border-gray-600">
          <PostForm />
        </section>
        <div className="flex h-full">
          <TweetsList />
        </div>
      </div>
      <CommentModal />
    </main>
  );
}
