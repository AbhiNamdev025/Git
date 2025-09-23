import React from "react";
import styles from "../cards.module.css";
function ImgCard() {
  return (
    <>
      <h2> Image Card</h2>
      <div className={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaYTmjdwsSzC4EOM44_c4tMvoyG7nyKxjhymn6k2TxwlNH1lDsUxJCX_GVZ5wVaeMIwQ&usqp=CAU"
          alt="Image"
          className={styles.avatar}
        />
        <h3>Avatar</h3>
        <p>A.I Generated Avatar.</p>
      </div>
    </>
  );
}

export default ImgCard;
