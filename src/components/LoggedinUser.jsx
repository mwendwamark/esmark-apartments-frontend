import React, { useEffect, useState } from "react";

function LoggedInUser() {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Make a fetch request to get the user data from the server
    fetch("http://localhost:3000/me")
      .then((res) => res.json())
      .then((data) => {
        // Assuming the server returns an object with the name property
        setUser(data.name);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching user data:", error);
        // You might want to redirect to the login page or handle the error differently
        
      });
  }, []);

  return (
    <div>
      <h1>Hello world{user}</h1>
    </div>
  );
}

export default LoggedInUser;
