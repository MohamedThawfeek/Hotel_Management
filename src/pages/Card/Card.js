import React from "react";
import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { deleteCustomer as del } from "../../Redux/Action/User";
import { useNavigate } from "react-router-dom";

const Card = ({
  data: { name, address, phone, aadhar, stay, check_in, email },
  id,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  return (
    <div className={style.container}>
      <h1>{name}</h1>

      <div className={style.info}>
        <label>Email</label>
        <p>{email}</p>
      </div>

      <div className={style.info}>
        <label>Mobile No</label>
        <p>{phone}</p>
      </div>

      <div className={style.aadhar}>
        <label>Aadhar</label>
        <p>{aadhar}</p>
      </div>

      <div className={style.address}>
        <label>Address</label>
        <p>{address}</p>
      </div>

      <div className={style.info}>
        <label>Check-in</label>
        <p>{check_in}</p>
      </div>

      <div className={style.stay}>
        <label>Stayed</label>
        <p>{stay}</p>
      </div>
      <div className={style.btn}>
        <button
          className={style.button}
          onClick={() => navigation(`/update/${id}`)}
        >
          Edit
        </button>

        <button className={style.button} onClick={() => dispatch(del(id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
