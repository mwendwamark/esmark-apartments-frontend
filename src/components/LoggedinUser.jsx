import React from "react";

function LoggedInUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <>
      <h1>Hello there </h1>
        <h2>Welcome, {user.name}!</h2>
      </>
    );
  } else {
    return <Login onLogin={setUser} />;
  }
}
export default LoggedInUser;
