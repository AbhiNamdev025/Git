import React from "react";
import styles from "../cards.module.css";
function BasicCard() {
  return (
    <>
      <h2> Basic Card</h2>
      <div className={styles.card}>
        <h3>Basic Card</h3>
        <p>This is a basic content card.</p>
      </div>
    </>
  );
}

export default BasicCard;
