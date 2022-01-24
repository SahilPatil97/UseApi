import React from "react";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  console.log(data);
  return data;
};

export function UseApi() {
  const { data, status } = useQuery("users", fetchUsers);

  return (
    <div>
      {status === "success" && (
        <div>
          {data.map((user, index) => (
            <p key={index}>{user.name}</p>
          ))}
          <p> status is :{status}</p>
        </div>
      )}
    </div>
  );
}
