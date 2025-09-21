import React from "react";
import styles from "../cards.module.css";

function Productcard() {
  return (
    <>
      <h2>Pricing Card</h2>
      <div className={styles.card}>
        <h3>Premium Plan</h3>
        <div className={styles.pricingAmount}>Rs. 1499 Per Month</div>
        <p>Includes all features.</p>
        <a href="#" className={styles.subscribeBtn}>
          Subscribe
        </a>
      </div>
    </>
  );
}

export default Productcard;
