import React from "react";
import { Helmet } from "react-helmet";

import ListOfCategories from "../Components/ListOfCategories ";
import { ListOfPhotoCards } from "../Components/ListOfPhotoCards";
const Home = ({ id }) => {
  return (
    <div>
      <Helmet>
        <title>Petgram- tu app de animales</title>
        <meta
          name="description"
          content="Con petgram puedes encontrar imagen de todo tipo"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </div>
  );
};

export default Home;
