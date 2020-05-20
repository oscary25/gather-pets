import React from "react";

import { GlobalStyle } from "./Styles/GlobalStyles";
import ListOfCategories from "./Components/ListOfCategories ";
import ListOfPhotoCards from "./Components/ListOfPhotoCards";
import Logo from "./Components/Logo";
const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
};

export default App;
