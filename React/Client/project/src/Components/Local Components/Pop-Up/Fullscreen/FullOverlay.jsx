import React from "react";
import styles from "./fulloverlay.module.css";
function FullOverlay() {
  return (
    <div>
      <label For="overlay" className={styles.overlayBtn}>
        Quick Guide
      </label>
      <input type="checkbox" id="overlay" className={styles.overlayToggle} />
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <h2>Ultra Instinct</h2>
          <img
            src="https://preview.redd.it/avatar-of-emptiness-vs-mui-goku-who-wins-v0-0t91nzga7wle1.jpg?width=640&crop=smart&auto=webp&s=5e3a7b797df322e41802f9a89ce773582d1c0a46"
            alt="Guide"
            className={styles.overlayImg}
          />
          <br />
          <label For="overlay" className={styles.overlayBtn}>
            Got It
          </label>
        </div>
      </div>
    </div>
  );
}

export default FullOverlay;
