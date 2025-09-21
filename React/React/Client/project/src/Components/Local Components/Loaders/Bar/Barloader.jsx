import React from "react";
import styles from "./Barloader.module.css";
const Barloader = () => {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles.bar}></div>
      </div>
    </>
  );
};

export default Barloader;
