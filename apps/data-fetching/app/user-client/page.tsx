"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
};

export default function UsersClient() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        setLoading(false);
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred!!");
        }
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Data Loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="space-y-4 mt-4 flex flex-col w-full items-center">
      <h1 className="font-bold">User Data List</h1>
      <ul className=" p-4 grid grid-cols-2 gap-2">
        {userData.map(({ id, email, name, phone, username }) => {
          return (
            <li
              key={id}
              className="p-4 bg-white shadow-md rounded-md text-gray-700"
            >
              <div className="font-bold">{name}</div>
              <div className="text-sm">
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
