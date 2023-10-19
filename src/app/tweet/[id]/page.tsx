async function GetTweetById(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tweets/${id}`
    );
    const data = await response.json();
    return data;
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
  return <h1>holaaa</h1>;
}
