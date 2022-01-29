import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Customer.module.css";

const Customer = () => {
  const customerData = useSelector((state) => {
    return state.data.customers;
  });

  return (
    <div className={style.container1}>
      <Navbar />
      <div className={style.container}>
        {customerData.map((data, index) => (
          <Card data={data} key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Customer;
