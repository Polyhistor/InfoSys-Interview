import React, { useState } from "react";
import { Photo } from "../actions";

// interface ImagesProps {
//   imagesData: boolean | Photo[];
// }

export const Images = ({ imagesData }: any): JSX.Element[] | any => {
  const [image, setImage] = React.useState();

  // Type guard
  // if(imagesData instanceof Photo){
  //   return <div>yo</div>
  // }

  return imagesData.map((element: Photo, idx: number) => {
    return (
      <img
        className="image"
        onClick={() => setImage(element.id)}
        key={idx}
        alt={element.title}
        src={image === element.id ? element.url : element.thumbnailUrl}
      ></img>
    );
  });
};
