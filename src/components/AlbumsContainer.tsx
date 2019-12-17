import React from "react";
import { connect } from "react-redux";
import { Album, Photo, fetchAlbums, fetchPhotos } from "../actions";
import { StoreState } from "../reducers";
import { Albums } from "./Albums";
import { Button } from "./Button";

// the type of your action creators has been intentionally set to "any", as typescript does not play well with redux-thunk
interface AppProps {
  albums: Album[];
  photos: Photo[];
  fetchAlbums(): any;
  fetchPhotos(id: number): any;
}

export const _AlbumsContainer = ({
  albums,
  photos,
  fetchAlbums,
  fetchPhotos
}: AppProps) => {
  const [fetching, setFetching] = React.useState(false);

  // setting the state back to false once our data updates
  React.useEffect(() => {
    setFetching(false);
  }, [albums, photos]);

  // click evnet handler
  const ClickHandler = (): void => {
    fetchAlbums();
    setFetching(true);
  };

  // album entry event handler
  const AlbumClickHandler = (id: number): void => {
    fetchPhotos(id);
  };

  return (
    <>
      <Button fetching={fetching} ClickHandler={ClickHandler}></Button>
      <Albums
        albumsData={albums}
        clickHandler={AlbumClickHandler}
        Photos={photos}
      />
    </>
  );
};

const mapStateToProps = ({
  albums,
  photos
}: StoreState): { albums: Album[]; photos: Photo[] } => {
  return { albums, photos };
};

export const AlbumsContainer = connect(mapStateToProps, {
  fetchAlbums,
  fetchPhotos
})(_AlbumsContainer);
