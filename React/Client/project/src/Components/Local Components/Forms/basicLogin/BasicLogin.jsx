import React from "react";
import styles from "../forms.module.css";
function BasicLogin() {
  return (
    <form className={styles.form}>
      <h2> Login </h2>
      <label>Username</label>
      <input type="text" required />
      <label>Password</label>
      <input type="password" required />

      <button type="submit">Login</button>
    </form>
  );
}

export default BasicLogin;
