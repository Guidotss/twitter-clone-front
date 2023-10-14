import { type FC } from "react";
import { CloseIcon, LeftArrowIcon } from "..";

interface Props {
  handleGifsModal: () => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>, term: string) => void;
  setGifModalStep: React.Dispatch<React.SetStateAction<number>>;
  gifModalStep: number;
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}
export const GifsModalForm: FC<Props> = ({
  handleGifsModal,
  handleSearch,
  setGifModalStep,
  gifModalStep,
  term,
  setTerm,
}) => {
  return (
    <form
      className="flex gap-5 px-5 py-2 z-10 fixed bg-black 2xl:w-[30vw] lg:w-[40vw] rounded-t-2xl "
      onSubmit={(e) => handleSearch(e, term)}
    >
      {gifModalStep === 1 ? (
        <button
          className="rounded-full hover:bg-gray-500 hover:bg-opacity-20 px-3 transition-colors duration-300 ease-in-out"
          onClick={handleGifsModal}
        >
          <CloseIcon />
        </button>
      ) : (
        <button
          className="rounded-full hover:bg-gray-500 hover:bg-opacity-20 px-3 transition-colors duration-300 ease-in-out"
          onClick={() => setGifModalStep(1)}
        >
          <LeftArrowIcon />
        </button>
      )}
      <input
        className="bg-transparent border-[1px] border-gray-500 rounded-full px-5 py-2 font-light focus:border-twitter focus:border-2 outline-none w-full text-gray-200 transition-all duration-100 ease-linear"
        placeholder="Search GIF"
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};
