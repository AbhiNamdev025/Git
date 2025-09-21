import React from "react";
import styles from "./Dotloader.module.css";
const Dotloader = () => {
  return (
    <>
      <div className={styles.dotted}>
        <span className={styles.first}></span>
        <span className={styles.sec}></span>
        <span className={styles.third}></span>
      </div>
    </>
  );
};

export default Dotloader;
