import React from "react";
import styles from "../cards.module.css";

function Pcard() {
  return (
    <>
      <h2> Profile Card</h2>
      <div className={styles.card}>
        <img
          src="https://i.pinimg.com/236x/de/59/6d/de596de8fd7df0b424fd6d9f300623d9.jpg"
          alt="Avatar"
          className={styles.profileImg}
        />
        <div className={styles.profileName}>Abhi Namdev</div>
        <div className={styles.profileRole}>Web Developer</div>
      </div>
    </>
  );
}

export default Pcard;
