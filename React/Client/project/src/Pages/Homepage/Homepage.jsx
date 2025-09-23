import React from "react";
import styles from "./homepage.module.css";
import Header from "../../Components/Global Components/Header/Header";
import Footer from "../../Components/Global Components/Footer/copyright and links/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className={styles.div}>Homepage</div>

      <Footer />
    </>
  );
};

export default Homepage;
