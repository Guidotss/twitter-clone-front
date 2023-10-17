async function GetTweetById(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tweets/${id}`,
      { cache: "no-cache" }
    );
    const data = await response.json();
    if (data.ok) {
      return data.tweet;
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
  const tweet = await GetTweetById(id);
  console.log(tweet);
  return <h1>holaaa</h1>;
}
