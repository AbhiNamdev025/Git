import React from "react";
import styles from "./Header.module.css";
import Primary from "../../Local Components/Buttons/Primarybutton/Primary";
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
            <div className={styles.navlink} onClick={() => navigate("/")}>
              Home
            </div>
            <div className={styles.navlink} onClick={() => navigate("/about")}>
              About
            </div>

            <div className={styles.dropdown}>
              <div
                className={styles.navlink}
                onClick={() => navigate("/services")}
              >
                Services &#9662;
              </div>
              <div className={styles.dropdownContent}>
                <div className={styles.navlink}>Web Dev</div>
                <div className={styles.navlink}>App Dev</div>
                <div className={styles.navlink}>Cyber Security</div>
              </div>
            </div>

            <div
              className={styles.navlink}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.navlink} onClick={() => navigate("/login")}>
              <Primary />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
