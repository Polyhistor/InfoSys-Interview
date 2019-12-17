import React from "react";
import { connect } from "react-redux";
import { Album, Photo, fetchAlbums, fetchPhotos } from "../actions";
import { StoreState } from "../reducers";
import { Albums } from "./Albums";

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
  const [albumsTitles, setAlbumTitles] = React.useState();
  const [image, setImage] = React.useState();

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

  const display = (id: number): JSX.Element[] => {
    const relevantThumbs = photos.filter(photo => photo.albumId === id);
    console.log(relevantThumbs);

    return relevantThumbs.map((thumb, idx) => {
      return (
        <img
          className="image"
          onClick={() => setImage(thumb.id)}
          key={idx}
          alt={thumb.title}
          src={image === thumb.id ? thumb.url : thumb.thumbnailUrl}
        ></img>
      );
    });
  };

  const renderList = (): JSX.Element[] =>
    albums.map(album => (
      <div className="albums" key={album.id}>
        <h2
          className="albums__title"
          onClick={() => AlbumClickHandler(album.id)}
        >
          {album.title}
        </h2>
        {display(album.id).length !== 0 ? (
          <div className="albums__thumbnails">{display(album.id)}</div>
        ) : null}
      </div>
    ));

  return (
    <>
      <button className="container__button" onClick={() => ClickHandler()}>
        Fetch Albums
      </button>
      {/* conditionally rendering the loader */}
      {fetching ? "loading" : null}
      {/* {renderList()} */}
      {/* TODO - TYPE CHECKING FOR PROPS */}
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
