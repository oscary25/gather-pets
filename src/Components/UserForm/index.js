import React from "react";

import { Form, Input, Button } from "./styles";
import useInputValue from "../Hooks/useInputValue";
const UserForm = ({ onSubmit }) => {
  const value = useInputValue({
    Email: "",
    Password: "",
  });

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Email" {...value.Email} />
        <Input placeholder="Password" type="password" {...value.Password} />
        <Button>Iniciar sesión.</Button>
      </Form>
    </div>
  );
};

export default UserForm;
