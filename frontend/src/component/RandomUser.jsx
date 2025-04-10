import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);

  const fetchAndSaveUser = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const fetchedUser = data.results[0];
      setUser(fetchedUser);

      const userData = {
        name: `${fetchedUser.name.first} ${fetchedUser.name.last}`,
        email: fetchedUser.email,
        phon: fetchedUser.phone,
        Location: `${fetchedUser.location.city}, ${fetchedUser.location.state}, ${fetchedUser.location.country}`,
      };

      const saveRes = await fetch("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await saveRes.json();
      console.log("Saved user to DB:", result);
    } catch (error) {
      console.error("Error fetching or saving user:", error);
    }
  };

  useEffect(() => {
    fetchAndSaveUser();
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-600 p-4 flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold text-white mb-8 underline">
        Random User Profile
      </h1>

      
      <div className="w-full max-w-sm rounded-2xl shadow-xl bg-white p-6 text-center">
        <img
          src={user.picture.large}
          alt="User Avatar"
          className="mx-auto rounded-full w-32 h-32 mb-4"
        />
        <h2 className="text-xl font-semibold mb-2 text-red-500">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-600 font-bold mb-1">Email: {user.email}</p>
        <p className="text-gray-600 font-bold mb-1">Phone: {user.phone}</p>
        <p className="text-gray-600 font-bold mb-1">
          Location: {user.location.city}, {user.location.state},{" "}
          {user.location.country}
        </p>
        <button
          onClick={fetchAndSaveUser}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-red-400 transition"
        >
          New Profile
        </button>
      </div>
    </div>
  );
};

export default RandomUser;
