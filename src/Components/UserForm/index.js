import React from "react";

import useInputValue from "../Hooks/useInputValue";
const UserForm = ({ onSubmit }) => {
  const value = useInputValue({
    Email: "",
    Password: "",
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" {...value.Email} />
        <input placeholder="Password" type="password" {...value.Password} />
        <button>Iniciar sesión.</button>
      </form>
    </div>
  );
};

export default UserForm;
