import React from "react";
import Header from "../../Components/Global Components/Header/Header";
import Fixedfooter from "../../Components/Global Components/Footer/Fixed/Fixedfooter";
import BasicLogin from "../../Components/Local Components/Forms/basicLogin/BasicLogin";
import BasicSignup from "../../Components/Local Components/Forms/basicSignup/BasicSignup";

const Loginpage = () => {
  return (
    <>
      <Header />
      <BasicSignup />
      <Fixedfooter />
    </>
  );
};

export default Loginpage;
