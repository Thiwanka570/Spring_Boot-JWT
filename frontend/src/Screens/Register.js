import axios from 'axios';

import React, { useState } from 'react';

function Register() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const registerUser = async (e) => {
    const response = await axios.post("https://127.0.0.1:8080/register/", user);
    if (response.status === 200) {
      console.log('Register success !');
    } else {
      throw new Error('Register Faild !');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
    console.log(user);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
