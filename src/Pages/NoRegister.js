import React from "react";

import Context from "../Context";
const NoRegister = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <form onSubmit={activateAuth}>
          <button>Iniciar sesión.</button>
        </form>
      );
    }}
  </Context.Consumer>
);

export default NoRegister;
