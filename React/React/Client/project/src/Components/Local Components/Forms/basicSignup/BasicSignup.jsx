import React, { useState } from "react";
import styles from "../forms.module.css";
import Bouncerloader from "../../Loaders/Bouncer/Bouncerloader";

function BasicSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:2525/add/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log("Details entered:", userData);
      })
      .catch((err) => console.error("Error:", err));
    readUser();
  };

  const users = [];

  const readUser = () => {
    fetch("http://localhost:2525/find/user")
      .then((res) => res.json())
      .then((userData) => {
        console.log("got data : ", userData);
        users(userData);
      })
      .catch((err) => console.log("error:", err));
  };

  return (
    <>
      <form
        className={`${styles.form} ${styles.card}`}
        onSubmit={submitHandler}
      >
        <h2>Signup</h2>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          required
        />
        <button type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>

      <div>
        <h3>Registered Users</h3>
        <Bouncerloader />
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BasicSignup;
