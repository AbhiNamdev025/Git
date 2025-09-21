import React from "react";
import styles from './Dropdwn.module.css'
function DropDown() {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Dropdown</button>
      <div className={styles.dropdownContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default DropDown;
