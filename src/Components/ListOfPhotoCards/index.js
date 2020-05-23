import React from "react";

import PhotoCard from "./../PhotoCard";
import { withPhotos } from "../hoc/withPhotos";

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photos) => (
        <PhotoCard key={photos.id} id={photos.id} {...photos} />
      ))}
    </ul>
  );
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
