import React from "react";
import styles from "../forms.module.css";

function SwitchForms() {
  return (
    <form className={`${styles.form} ${styles.inlineOrange}`}>
      <h2>Login/Signup Switch</h2>
      <div className={styles.radioGroup}>
        <input type="radio" id="login" name="form-type" defaultChecked />
        <label htmlFor="login">Login</label>
        <input type="radio" id="signup" name="form-type" />
        <label htmlFor="signup">Signup</label>
      </div>
      <label>Email</label>
      <input type="email" required />
      <label>Password</label>
      <input type="password" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SwitchForms;
