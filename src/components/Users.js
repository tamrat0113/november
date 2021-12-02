import React from "react";

import useFetch from "../hooks/useFetch";

import Spinner from "./Spinner";

function Users() {
  const [users, isLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/users/"
  );

  return (
    <div style={{ padding: "10px", border: "2px solid orange" }}>
      <h1>Users</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <ol>
          {users.map(({ id, email, name, company }) => (
            <li key={id}>
              <strong>{name}</strong> ({email})
              <br />
              {company.name}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Users;
