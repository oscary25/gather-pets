import React from "react";

import Context from "../Context";
import UserForm from "../Components/UserForm";
const NoRegister = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <div>
          <UserForm onSubmit={activateAuth} />
        </div>
      );
    }}
  </Context.Consumer>
);

export default NoRegister;
