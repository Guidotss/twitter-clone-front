import { GifIcon, ImageIcon } from "..";

interface Props {
  openGifsModal?: () => void;
  uploadImage?: (e: File) => void;
}

export const MediaOptions = ({ openGifsModal, uploadImage }: Props) => {
  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      uploadImage!(file);
    }
  }
  return (
    <div className="flex gap-2 cursor-pointer">
      <input type="file" hidden id="load-image" onChange={handleUploadImage}/>
      <label htmlFor="load-image">
        <i className="flex hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
          <ImageIcon width="22px" height="22px" />
        </i>
      </label>
      <i className="flex hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full" onClick={openGifsModal}>
        <GifIcon width="22px" height="22px" />
      </i>
    </div>
  );
};
