import React from "react";
import { Album } from "../actions";
import { thumbnailsFilter } from "../helpers/thumbnailsFilter";
import { Images } from "./Images";
import { Photo } from "../actions";

export interface AlbumsProps {
  albumsData: Album[];
  clickHandler: (id: number) => void;
  Photos: Photo[];
}

export const Albums = ({
  albumsData,
  clickHandler,
  Photos
}: AlbumsProps): JSX.Element[] | any => {
  return albumsData.map((album: Album) => {
    // filtering out the corresponding thumbnail
    const filteredImages: boolean | Photo[] = thumbnailsFilter(
      album.id,
      Photos
    );

    return (
      <div className="albums" key={album.id}>
        <h2 className="albums__title" onClick={() => clickHandler(album.id)}>
          {album.title}
        </h2>

        {filteredImages !== false ? (
          <div className="albums__thumbnails">
            <Images imagesData={filteredImages}></Images>
          </div>
        ) : null}
      </div>
    );
  });
};
