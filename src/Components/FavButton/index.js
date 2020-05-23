import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Button } from "../PhotoCard/styles";

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button liked={liked} likes={likes} onClick={onClick}>
      <Icon size="34px" /> Waaoo {likes} likes !
    </Button>
  );
};

export default FavButton;
