import React, { useState } from "react";
import style from "./Edit_Customer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editCustomer } from "../../Redux/Action/User";

const Edit_Customer = () => {
  const data = useSelector((state) => {
    return state.data.customers;
  });

  const index = useParams().id;
  const tempData = data[index];
  const [infos, setInfos] = useState({ ...tempData });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setInfos((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClick = () => {
    dispatch(editCustomer(infos));
    navigate("/customer");
  };

  return (
    <div className={style.container}>
      <h1>Update_Customer Information</h1>
      <div className={style.name}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={handelChange}
          value={infos.name}
        />
      </div>
      <div className={style.content}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handelChange}
          value={infos.email}
        />
        <br />

        <label>Mobie No</label>
        <input
          type="tel"
          name="phone"
          onChange={handelChange}
          value={infos.phone}
        />
        <br />
        <label>Aadhar</label>
        <input
          name="aadhar"
          type="number"
          onChange={handelChange}
          value={infos.aadhar}
        />
        <br />

        <label>Address</label>
        <input
          name="address"
          type="text"
          onChange={handelChange}
          value={infos.address}
        />
        <br />

        <label>Check-In</label>
        <input
          type="date"
          name="check_in"
          onChange={handelChange}
          value={infos.check_in}
        />
        <br />
        <label>No of days</label>
        <input
          name="stay"
          type="number"
          onChange={handelChange}
          value={infos.stay}
        />
        <br />
      </div>
      <button className={style.button} onClick={() => handelClick(index)}>
        update
      </button>
    </div>
  );
};

export default Edit_Customer;
