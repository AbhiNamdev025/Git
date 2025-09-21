import React from "react";
import styles from "../cards.module.css";

function Scard() {
  return (
    <>
      <h2> Hover Effect Card</h2>
      <div className={`${styles.card} ${styles.hoverCard}`}>
        <h3>Hover Me</h3>
        <p>This card Scale-Up on hover.</p>
      </div>
    </>
  );
}

export default Scard;
