import React from "react";
import styles from "./modal.module.css";
function Modalpopup() {
  return (
    <div>
      <label For="modal" className={styles.modalBtn}>
        View Special Offer
      </label>
      <input type="checkbox" id="modal" className={styles.modalToggle} />
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>Special Offers</h2>
          <p>Get In Touch</p>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea placeholder="Enter your message" required />
          <br />
          <label For="modal" className={styles.modalBtn}>
            Send Enquiry
          </label>
        </div>
      </div>
    </div>
  );
}

export default Modalpopup;
