import { Photo } from "../actions";

export function thumbnailsFilter(
  id: number,
  photos: Photo[]
): boolean | Photo[] {
  const filtererdEntities = photos.filter(
    (photo: Photo) => photo.albumId === id
  );
  return filtererdEntities.length !== 0 ? filtererdEntities : false;
}
