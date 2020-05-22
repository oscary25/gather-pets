import React from "react";

import PhotoCard from "./../PhotoCard";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

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
