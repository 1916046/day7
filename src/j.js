import React, { useState } from 'react';
import Comments from './comments';
import WriterBlog from './Blog';

const ParentComponent = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleLogin = (email, password) => {
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setLoggedInUser(user);
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSignup = (email, password) => {
    if (email === "" || password === "") {
      setError("Please provide a valid email and password");
      return;
    }

    const userExists = registeredUsers.some((u) => u.email === email);
    if (userExists) {
      setError("User already exists with this email");
    } else {
      const newUser = { email, password };
      setRegisteredUsers([...registeredUsers, newUser]);
      setLoggedInUser({ email });
    }
  };

  return (
    <>
      <WriterBlog
        loggedInUser={loggedInUser}
        onLogin={handleLogin}
        onSignup={handleSignup}
        error={error}
      />
      <Comments
        loggedInUser={loggedInUser}
        onLogin={handleLogin}
        onSignup={handleSignup}
        error={error}
      />
    </>
  );
};

export default ParentComponent;