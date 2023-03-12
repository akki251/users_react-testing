import React, { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
    // onUserAdd({ name, email, id: new Date().toISOString() });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default React.memo(UserForm);
