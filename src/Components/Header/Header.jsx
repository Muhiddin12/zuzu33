import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import style from "./Header.module.scss";
import header from "./image 7.png";

function Header() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={style.mySwiper}
    >
      <SwiperSlide>
        <img src={header} alt="header" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={header} alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={header} alt="img3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
