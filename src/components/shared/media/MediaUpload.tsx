import { type FC } from "react";
import Image from "next/image";
import { LoaderIcon } from "..";

interface Props {
  gifUrl?: string;
  imageUrl?: string;
  isLoadingImage?: boolean;
}

export const MediaUpload: FC<Props> = ({
  gifUrl,
  imageUrl,
  isLoadingImage,
}) => {
  return (
    <div className="self-center mb-5">
      {gifUrl && (
        <Image
          className="rounded-lg"
          src={gifUrl}
          alt="gif"
          width={500}
          height={400}
          loader={({ src }) => src}
        />
      )}
      {isLoadingImage ? (
        <LoaderIcon />
      ) : (
        imageUrl && (
          <Image
            className="rounded-lg"
            src={imageUrl}
            alt="image"
            width={500}
            height={400}
            loader={({ src }) => src}
          />
        )
      )}
    </div>
  );
};
