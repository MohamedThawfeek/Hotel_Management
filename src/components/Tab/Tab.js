import React from "react";
import style from "./Tab.module.css";
import certificate from "../../assets/certificate.png";
import money from "../../assets/india-money.webp";
import money_Slash from "../../assets/indian-money-slash.png";
import wifi from "../../assets/wifi.jpg";

const Tab = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src={certificate} alt="" />
        <small>Best Rates Guaranteed</small>
      </div>
      <div className={style.content}>
        <img src={money} alt="" />
        <small>Pay at Hotel</small>
      </div>
      <div className={style.slash}>
        <img src={money_Slash} alt="" />
        <small>No Hiddden Charges </small>
      </div>
      <div className={style.content}>
        <img src={wifi} alt="" />
        <small>Wifi Access</small>
      </div>
    </div>
  );
};

export default Tab;
