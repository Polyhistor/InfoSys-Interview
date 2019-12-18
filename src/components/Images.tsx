import React, { Dispatch, SetStateAction, useState } from "react";
import { Photo } from "../actions";

interface ImagesProps {
  imagesData: Photo[];
}

export const Images = ({ imagesData }: ImagesProps): JSX.Element[] | any => {
  const [image, setImage]: [
    number | undefined,
    Dispatch<SetStateAction<number | undefined>>
  ] = useState();

  return imagesData.map(
    (element: Photo, idx: number): JSX.Element => (
      <img
        className="image"
        onClick={() => setImage(element.id)}
        key={idx}
        alt={element.title}
        src={image === element.id ? element.url : element.thumbnailUrl}
      ></img>
    )
  );
};
