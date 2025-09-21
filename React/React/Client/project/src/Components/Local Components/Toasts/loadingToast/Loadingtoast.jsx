import React from "react";
import styles from './loading.module.css' 
function Loadingtoast() {
  return (
    <div>
      <label For="loading" className={styles.label}>
        ⏳ Loading
      </label>
      <input type="checkbox" id="loading" className={styles.toastToggle} />
      <div className={styles.toast}>
        ⏳ Loading message
        <label For="loading" className={styles.cross}>
          &times;
        </label>
      </div>
    </div>
  );
}

export default Loadingtoast;
