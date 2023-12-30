import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [err, setErr] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.username === "user" && userData.password === "password") {
      setLoggedIn(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <>
      <h1>Login Page</h1>

      {loggedIn ? (
        <p>Welcome, {userData.username}!</p>
      ) : (
        <>
          {err && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <input
                id="username"
                value={userData.username}
                name="username"
                type="text"
                required
                onChange={(e) => handleChange(e)}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password:
              <input
                id="password"
                value={userData.password}
                name="password"
                type="password"
                required
                onChange={(e) => handleChange(e)}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
