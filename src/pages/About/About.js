import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./About.module.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <h1>About Us</h1>
        <p>
          The ultimate trave curator and connoisseur,Belmond creates exceptional
          worldwide. Our global collection of iconic hotels,river cruises bring
          togeather some of the world's most thrilling journeys and
          destinations.
        </p>
        <div className={style.img}>
          <img
            src="https://media.cntraveler.com/photos/59dc0961d74f3663416ffe8b/3:2/w_2046,h_1364,c_limit/Pool-COMOMetropolitanMiamiBeach-Florida-CRHotel.jpg"
            alt="img2"
          />
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/63791082.jpg?k=b2256d03c530896f4851bc1d4442c22b02b664851e2866bc9d909af8fe522f00&o=&hp=1"
            alt="img3"
          />
        </div>
        <div className={style.bottom}>
          <strong>
            when you join Belmond, you join a global family.we ensure our
            employees have just as many memorable moments as our guests{" "}
          </strong>
        </div>
      </div>
      <footer>
        ©2022 The Indian Hotels Company Limited. All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;
