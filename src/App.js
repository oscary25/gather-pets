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
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  const UserLogged = ({ children }) => {
    return children({ isAuth: true });
  };

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
          <UserLogged>
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
          </UserLogged>
        </div>
      )}
      <NavBar />
    </div>
  );
};

export default App;
