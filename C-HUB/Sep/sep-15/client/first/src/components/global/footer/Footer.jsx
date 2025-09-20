import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footerfixed}>
        <div className={styles.container}>
          <p className={styles.copyright}>&copy; 2025 Abhi Namdev</p>
          <nav className={styles.footnav}>
            <ul>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
