import React from "react";
import styles from "../forms.module.css";

function SplitPanel() {
  return (
    <div className={styles.splitPanel}>
      <div className={styles.panel}>
        <h3>Login</h3>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </div>
      <div className={`${styles.panel} ${styles.right}`}>
        <h3>Signup</h3>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
}

export default SplitPanel;
