import React from "react";
import styles from "./error.module.css";
function Errortoast() {
  return (
    <div>
      <label For="error" className={styles.label}>
        ❌ Error
      </label>
      <input type="checkbox" id="error" className={styles.toastToggle} />
      <div className={styles.toast}>
        ❌ Error message
        <label For="error" className={styles.cross}>
          &times;
        </label>
      </div>
    </div>
  );
}

export default Errortoast;
