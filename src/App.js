import React from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./Styles/GlobalStyles";
import Home from "./pages/Home";
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
        <Router>
          <Home path="/" />
          <Home path="/path/:id" />
        </Router>
      )}
    </div>
  );
};

export default App;
