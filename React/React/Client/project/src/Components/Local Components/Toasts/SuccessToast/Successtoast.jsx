import React from "react";
import styles from "./success.module.css";
function Successtoast() {
  return (
    <div>
      <label For="success" className={styles.label}>
        ✅ Success
      </label>
      <input type="checkbox" id="success" className={styles.toastToggle} />
      <div className={styles.toast}>
        ✅ Success message
        <label For="success" className={styles.cross}>
          &times;
        </label>
      </div>
    </div>
  );
}

export default Successtoast;
