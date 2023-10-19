import { LeftArrowIcon } from "@/components";
import { TweetCard } from "@/components/tweets/TweetCard";
import Link from "next/link";

async function GetTweetById(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tweets/${id}`,
      { cache: "no-cache" }
    );
    const data = await response.json();
    if (data.ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

interface TweetPageProps {
  params: {
    id: string;
  };

}
export default async function TweetPage({ params }: TweetPageProps) {
  const { id } = params;
  const { tweet } = await GetTweetById(id);
  
  return ( 
    <main className="h-screen border-l-[1px] border-r-[1px] border-gray-700">
      <header className="w-full flex items-center gap-10 p-5">
        <Link href="/tweets">
          <i>
            <LeftArrowIcon/>
          </i>
        </Link>
        <h1 className="text-xl font-bold">Post</h1>
      </header>
      <section className="mt-10">
      </section>
    </main>
  )
}