import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Button } from "../PhotoCard/styles";

const FavButton = ({ liked, like = 0, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button liked={liked} onClick={onClick}>
      <Icon size="34px" /> Waaoo {like} likes !
    </Button>
  );
};

export default FavButton;
