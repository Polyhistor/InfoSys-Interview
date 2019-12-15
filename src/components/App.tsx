import React from "react";
import { connect } from "react-redux";
import { Album, Photo, fetchAlbums, fetchPhotos } from "../actions";
import { StoreState } from "../reducers";

// *Notice: in this file we have used React.UseEffect and React.UseState instead of importing
// hooks directly from React. That's for the reasons of testing and how Enzyme and Jest have not yet adopted
// very well with hooks.

// the type of your action creators has been intentionally set to "any", as typescript does not play well with redux-thunk
interface AppProps {
  albums: Album[];
  photos: Photo[];
  fetchAlbums(): any;
  fetchPhotos(id: number): any;
}

export const _App = ({
  albums,
  photos,
  fetchAlbums,
  fetchPhotos
}: AppProps) => {
  // setting the initial state of the loader and thmbnail
  const [fetching, setFetching] = React.useState(false);
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

  // helper function to render jsx elements
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
    <section className="container">
      <button className="container__button" onClick={() => ClickHandler()}>
        Fetch Albums
      </button>
      {/* conditionally rendering the loader */}
      {fetching ? "loading" : null}
      {renderList()}
    </section>
  );
};

const mapStateToProps = ({
  albums,
  photos
}: StoreState): { albums: Album[]; photos: Photo[] } => {
  return { albums, photos };
};

export const App = connect(mapStateToProps, { fetchAlbums, fetchPhotos })(_App);
