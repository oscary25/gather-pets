import React, { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);

  return { value, onChange };
};

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
