import React from "react";

import { Anchor } from "./styles.js";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
  return (
    <div>
      <Anchor href={path}>
        <img src={cover} alt="first-image" />
        {emoji}
      </Anchor>
    </div>
  );
};

export default Category;
