import React, { useState } from 'react';
import bcrypt from "bcryptjs-react";


interface LoginFormProps {
  onSubmit: (email: string, hashedPassword: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    onSubmit(email, hashedPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;