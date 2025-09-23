import React from "react";
import styles from "./retry.module.css";
function Retrytoast() {
  return (
    <div>
      <label For="retry" className={styles.label}>
        🔄 Retry
      </label>
      <input type="checkbox" id="retry" className={styles.toastToggle} />
      <div className={styles.toast}>
        🔄 Retry message
        <label For="retry" className={styles.cross}>
          &times;
        </label>
      </div>
    </div>
  );
}

export default Retrytoast;
