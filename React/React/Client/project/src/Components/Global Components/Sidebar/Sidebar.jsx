import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Primary from "../../Local Components/Buttons/Primarybutton/Primary";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.Sidebar}>
        <nav className={styles.nav}>
          <div className={styles.Sidebartop}>
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
                  <div
                    className={styles.navlink}
                    onClick={() => navigate("/services/webdev")}
                  >
                    Web Dev
                  </div>
                  <div
                    className={styles.navlink}
                    onClick={() => navigate("/services/appdev")}
                  >
                    App Dev
                  </div>
                  <div
                    className={styles.navlink}
                    onClick={() => navigate("/services/cybersecurity")}
                  >
                    Cyber Security
                  </div>
                </div>
              </div>

              <div
                className={styles.navlink}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.navlink} onClick={() => navigate("/login")}>
              <Primary />
            </div>
            <div
              className={styles.navlink}
              onClick={() => window.location.href = "tel:9812409496"}
            >
              📞
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
