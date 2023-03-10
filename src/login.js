import React, { useState } from 'react';

const Login = (props) => {
  const { onLogin } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loginemail">Email:</label>
      <input type="loginemail" id="loginemail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="loginpassword">Password:</label>
      <input type="password" id="loginpassword" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
    </form>
  );
};

const Signup = (props) => {
  const { onSignup } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export { Login, Signup };
