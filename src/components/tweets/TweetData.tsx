import { Tweet, GifsUser } from "@/interfaces";

interface TweetDataProps {
  user: GifsUser;
  tweet: Tweet;
}

export const TweetData = ({ user, tweet }: TweetDataProps) => {
  let createAt = new Date(tweet.createdAt);
  let now = new Date();
  let diffHours = Math.abs(now.getHours() - createAt.getHours());
  let diffMinutes = Math.abs(now.getMinutes() - createAt.getMinutes());
  let diffSeconds = Math.abs(now.getSeconds() - createAt.getSeconds());

  let time: string = `${diffHours}h`;

  if (diffHours == 0) {
    if (diffMinutes == 0) {
      time = `${diffSeconds}seg`;
    } else {
      time = `${diffMinutes}min`;
    }
  }
  return (
    <div className="flex gap-2 items-center">
      <h3>{user.name}</h3>
      <h4 className="text-sx text-gray-600">
        @{user.email.split("@")[0]}
      </h4>
      <span className="text-gray-600">·</span>
      <span className="text-gray-600">{time}</span>
    </div>
  );
};
