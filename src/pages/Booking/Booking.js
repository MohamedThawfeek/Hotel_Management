import React, { useState } from "react";
import style from "./Booking.module.css";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../Redux/Action/User";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [info, setInfo] = useState({
    name: "",
    aadhar: "",
    check_in: "",
    stay: "",
    phone: "",
    email: "",
    address: "",
  });
  const dispatch = useDispatch();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setInfo((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const Add = () => {
    if (
      info.name.trim() === "" ||
      info.aadhar.trim() === "" ||
      info.stay.trim() === "" ||
      info.check_in.trim() === "" ||
      info.phone.trim() === "" ||
      info.email.trim() === "" ||
      info.address.trim() === ""
    ) {
      alert("Please ill the details");
    }
    dispatch(addCustomer(info));
    setInfo({
      name: "",
      aadhar: "",
      check_in: "",
      stay: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className={style.container1}>
      <button className={style.button} onClick={back}>
        {" "}
        Back{" "}
      </button>
      <div className={style.container}>
        <h1>Customer Information</h1>
        <div className={style.name}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={handelChange}
            value={info.name}
          />
        </div>
        <div className={style.content}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handelChange}
            value={info.email}
          />
          <br />

          <label>Mobie No</label>
          <input
            type="tel"
            name="phone"
            onChange={handelChange}
            value={info.phone}
          />
          <br />
          <label>Aadhar</label>
          <input
            name="aadhar"
            type="number"
            onChange={handelChange}
            value={info.aadhar}
          />
          <br />

          <label>Address</label>
          <input
            name="address"
            type="text"
            onChange={handelChange}
            value={info.address}
          />
          <br />

          <label>Check-In</label>
          <input
            type="date"
            name="check_in"
            onChange={handelChange}
            value={info.check_in}
          />
          <br />
          <label>No of days</label>
          <input
            name="stay"
            type="number"
            onChange={handelChange}
            value={info.stay}
          />
          <br />
        </div>
        <button className={style.button} onClick={Add}>
          Add Customer Data
        </button>
      </div>
    </div>
  );
};

export default Booking;
