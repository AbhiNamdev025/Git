import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.fcontent}>
          <div className={styles.social}>
            <div className={styles.subscribe}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Subscribe For Emails"
              />
              <input type="button" value="Subscribe" />
            </div>
            <div className={styles.links}>
              <a href="/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
              </a>
              <a href="/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" />
              </a>
              <a href="/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
              </a>
            </div>
          </div>
          <ul className={styles.flinks}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
           <p>&copy;Abhi Namdev 2025</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
