import React from "react";
import styles from "./warning.module.css";
function Warningtoast() {
  return (
    <div>
      <label For="warning" className={styles.label}>
        ⚠️ Warning
      </label>
      <input type="checkbox" id="warning" className={styles.toastToggle} />
      <div className={styles.toast}>
        ⚠️ Wqrning message
        <label For="warning" className={styles.cross}>
          &times;
        </label>
      </div>
    </div>
  );
}

export default Warningtoast;
