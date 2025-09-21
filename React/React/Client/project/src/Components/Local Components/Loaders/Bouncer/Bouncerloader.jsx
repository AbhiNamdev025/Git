import React from "react";
import styles from "./Bouncer.module.css";
const Bouncerloader = () => {
  return (
    <>
      <div className={styles.bouncer}>
        <span className={styles.first}></span>
        <span className={styles.sec}></span>
        <span className={styles.third}></span>
      </div>
    </>
  );
};

export default Bouncerloader;
