import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./Carousel.module.css";
const Carousels = () => {
  return (
    <div className={style.container}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/headmast-desktop/welcomhotel-bhubaneswar.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v3519425406/Hotel/00147639/Sunset_Garden_shot_2_2jIJ0D.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://images7.alphacoders.com/362/362619.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
