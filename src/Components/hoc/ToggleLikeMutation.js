import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>;
};

export default ToggleLikeMutation;
