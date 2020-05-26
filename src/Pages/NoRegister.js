import React from "react";

import Context from "../Context";
import UserForm from "../Components/UserForm";
import { RegisterMutation } from "../Components/hoc/RegisterMutation";
const NoRegister = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <RegisterMutation>
          {(register) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables }).then(activateAuth);
            };
            <UserForm onSubmit={onSubmit} />;
          }}
        </RegisterMutation>
      );
    }}
  </Context.Consumer>
);

export default NoRegister;
