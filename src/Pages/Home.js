import React from "react";

import ListOfCategories from "../Components/ListOfCategories ";
import { ListOfPhotoCards } from "../Components/ListOfPhotoCards";
const Home = ({ id }) => {
  return (
    <div>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </div>
  );
};

export default Home;
