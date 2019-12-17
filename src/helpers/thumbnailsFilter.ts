import { Photo } from "../actions";

export function thumbnailsFilter(
  id: number,
  photos: Photo[]
): [boolean, Photo[]] {
  // filtering through photos and returning the matched one
  const filtererdEntities = photos.filter(
    (photo: Photo) => photo.albumId === id
  );
  // identifier for emptiness of the filtered entities
  const empty: boolean = filtererdEntities.length !== 0 ? false : true;

  // returning two values, a boolean and the list of entities
  return [empty, filtererdEntities];
}
