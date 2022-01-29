import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link to="/">
        <h1>Hotel Register Form</h1>
      </Link>

      <ul>
        <Link to="/">Home</Link>
        <Link to="/customer">Customer</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
};

export default Navbar;
