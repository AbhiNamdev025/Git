import React from "react";
import styles from "./Hovercard..module.css";
function HoverCard() {
  return (
    <div className={styles.hoverCard}>
      <div className={styles.profilePreview}>
        <img
          src="https://cdn.vrcmods.com/uploads/items/item/9742/imgs/97be58e4b39742749e7a922f7e146796.jpg"
          alt="Profile"
          className={styles.profileImg}
        />
        <span>Son Goku</span>
      </div>
      <div className={styles.cardPopup}>
        <img
          src="https://cdn.vrcmods.com/uploads/items/item/9742/imgs/97be58e4b39742749e7a922f7e146796.jpg"
          alt="Profile"
          className={styles.profileImg}
        />
        <strong>Son Goku</strong>
        <p>Maybe Uk Me Already 😉</p>
      </div>
    </div>
  );
}

export default HoverCard;
