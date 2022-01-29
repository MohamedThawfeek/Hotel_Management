import React from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Carousels from "../../components/Carousel/Carousel";
import Tab from "../../components/Tab/Tab";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const click = () => {
    navigate("/booking");
  };

  return (
    <div className={style.container}>
      <Navbar />
      <Carousels />
      <Tab />
      <a href="#" onClick={click} className={style.a}>
        <span>Click here to Book</span>
      </a>
    </div>
  );
};

export default Home;
