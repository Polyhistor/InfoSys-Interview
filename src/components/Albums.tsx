import React from "react";
import { Album } from "../actions";
import { thumbnailsFilter } from "../helpers/thumbnailsFilter";
import { Images } from "./images";

export const Albums = ({
  albumsData,
  clickHandler,
  photos
}: any): JSX.Element[] | any => {
  return albumsData.map((album: Album) => (
    <div className="albums" key={album.id}>
      <h2 className="albums__title" onClick={() => clickHandler(album.id)}>
        {album.title}
      </h2>
      {thumbnailsFilter(album.id, photos) !== false ? (
        <div className="albums__thumbnails">{Images()}</div>
      ) : null}
      }
    </div>
  ));
};
