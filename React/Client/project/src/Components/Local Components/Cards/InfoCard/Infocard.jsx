import React from "react";
import styles from "../cards.module.css";

function Infocard() {
  return (
    <>
      <h2>Info Card with Border</h2>
      <div className={`${styles.card} ${styles.infoCard}`}>
        <h3>Notice</h3>
        <p>This card uses a colored left border.</p>
      </div>
    </>
  );
}

export default Infocard;
