import { useEffect, useState } from "react";

export default function About() {
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);
  return (
    <div className="mt-20 flex flex-wrap gap-5 p-5">
      {users?.map((user) => (
        <div
          className="border border-red-600 rounded-lg p-5 gap-4 flex flex-col "
          key={user?.id}
        >
          <h1>Id: {user?.id}</h1>
          <h1>Username: {user?.name}</h1>
          <h1>Phone: {user?.phone}</h1>
        </div>
      ))}
    </div>
  );
}
