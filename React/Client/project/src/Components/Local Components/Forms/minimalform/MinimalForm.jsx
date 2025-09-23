import React from "react";
import styles from "../forms.module.css";

function MinimalForm() {
  return (
    <form className={`${styles.form} ${styles.minimalist}`}>
      <h2> Minimalist Form</h2>
      <label>Email</label>
      <input type="email" required />
      <label>Password</label>
      <input type="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default MinimalForm;
