// import React from "react";
// import "./header.css";
import { useEffect } from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>🌟</span>
          </div>
          <div className={styles.navlinks}>
            <div onClick={() => navigate("/ghar")}>Home</div>

            <div onClick={() => navigate("/parichya")}>About</div>

            <div className={styles.dropdown}>
              <div>Services &#9662;</div>
              <div className={styles.dropdownContent}>
                <div>Web Dev</div>
                <div>App Dev</div>
                <div>Cyber Security</div>
              </div>
            </div>

            <div onClick={() => navigate("/sampark")}>Contact Us</div>
          </div>
          <div className={styles.actions}>
            <a href="/">Login</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
