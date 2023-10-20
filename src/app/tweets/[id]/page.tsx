import { LeftArrowIcon } from "@/components";
import { TweetCard } from "@/components/tweets/TweetCard";
import Image from "next/image";
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
            <LeftArrowIcon />
          </i>
        </Link>
        <h1 className="text-xl font-bold">Post</h1>
      </header>
      <section className="mt-4 flex flex-col px-6">
        <div className="flex gap-2 items-center">
          <figure>
            <Image
              src={`https://${tweet.user.imageUrl}`}
              alt="Profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
          </figure>
          <div className="flex flex-col">
            <h3 className="font-bold">{tweet.user.name}</h3>
            <span className="text-gray-500">
              @{tweet.user.email.split("@")[0]}
            </span>
          </div>
        </div>
        <div className="mt-4 px-2">
          <p className="text-xl">{tweet.content}</p>
          {tweet.gifUrl || tweet.ImageUrl ? (
            <figure className="mt-4">
              <Image
                src={`${tweet.gifUrl || `https://${tweet.imageUrl}`}`}
                alt="Post image"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </figure>
          ) : null}
        </div>
      </section>
    </main>
  );
}
