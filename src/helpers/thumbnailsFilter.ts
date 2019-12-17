import { Photo } from "../actions";

export function thumbnailsFilter(
  id: number,
  photos: Photo[]
): boolean | Photo[] {
  const filteredPhotos = photos.filter((photo: Photo) => photo.albumId === id);
  return filteredPhotos.length !== 0 ? filteredPhotos : false;
}
