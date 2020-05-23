import React from "react";

import { GlobalStyle } from "./Styles/GlobalStyles";
import ListOfCategories from "./Components/ListOfCategories ";
import { ListOfPhotoCards } from "./Components/ListOfPhotoCards";
import Logo from "./Components/Logo";
import { ListOfPhotoCardsWithQuery } from "./Components/hoc/ListOfPhotoCardsWithQuery";
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <Logo />
      <GlobalStyle />
      {detailId ? (
        <ListOfPhotoCardsWithQuery id={detailId} />
      ) : (
        <div>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </div>
      )}
    </div>
  );
};

export default App;
