import { User } from "@/interfaces";
import Image from "next/image";
import { MediaOptions } from "../MediaOptions";

export const CommentModalForm = ({ user }: { user: User }) => {
  return (
    <>
      <div className="flex gap-2">
        <figure>
          <Image
            src={`https://${user?.imageUrl}`}
            alt="user profile picture"
            width={50}
            height={50}
            className="rounded-full p-1"
          />
        </figure>
        <textarea
          className="w-full bg-transparent text-gray-300 text-xl outline-none resize-none mt-3"
          placeholder="Postea tu respuesta"
        />
      </div>
      <footer className="flex justify-between items-center mt-10">
        <MediaOptions />
        <button className="bg-twitter px-5 py-2 rounded-full">Responder</button>
      </footer>
    </>
  );
};
