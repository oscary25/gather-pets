import React from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./Styles/GlobalStyles";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NoRegister from "./pages/NoRegister";
import Logo from "./Components/Logo";
import { ListOfPhotoCardsWithQuery } from "./Components/hoc/ListOfPhotoCardsWithQuery";
import NavBar from "./Components/NavBar";
import Context from "./Context";
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
          <Router>
            <Home path="/" />
            <Home path="/path/:id" />

            <Favs path="/favs" />
            <User path="/user" />
          </Router>
          <Context.Consumer>
            {({ isAuth }) =>
              isAuth ? (
                <Router>
                  <Favs path="/favs" />
                  <User path="/user" />
                </Router>
              ) : (
                <Router>
                  <NoRegister path="/favs" />
                  <NoRegister path="/user" />
                </Router>
              )
            }
          </Context.Consumer>
        </div>
      )}
      <NavBar />
    </div>
  );
};

export default App;
