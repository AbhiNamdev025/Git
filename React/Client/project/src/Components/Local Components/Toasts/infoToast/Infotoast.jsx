import React from "react";
import styles from "./info.module.css";
function Infotoast() {
  return (
    <div>
      <label For="info" className={styles.label}>
        ℹ️ Info
      </label>
      <input type="checkbox" id="info" className={styles.toastToggle} />
      <div className={styles.toast}>
        ℹ️ Info message
        <label For="info" className={styles.cross}>
          &times;
        </label>
      </div>
    </div>
  );
}

export default Infotoast;
