import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Image } from "react-bootstrap";

export default function SliderCard() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper text-white"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-around">
            <div>
              <Image
                src="https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg?t=1655979558"
                alt="slider 1 "
              ></Image>
            </div>
            <div>
              <p className="px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores pariatur dicta facilis fugit minus, aut consequatur
                autem odit veniam temporibus sapiente animi sit architecto nulla
                nostrum. Eaque quo placeat culpa?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-around">
            <div>
              <Image
                src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1654259241"
                alt="slider 2 "
              ></Image>
            </div>
            <div>
              <p className="px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores pariatur dicta facilis fugit minus, aut consequatur
                autem odit veniam temporibus sapiente animi sit architecto nulla
                nostrum. Eaque quo placeat culpa?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-around">
            <div>
              <Image
                src="https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg?t=1655979558"
                alt="slider 1 "
              ></Image>
            </div>
            <div>
              <p className="px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores pariatur dicta facilis fugit minus, aut consequatur
                autem odit veniam temporibus sapiente animi sit architecto nulla
                nostrum. Eaque quo placeat culpa?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-around">
            <div>
              <Image
                src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1654259241"
                alt="slider 2 "
              ></Image>
            </div>
            <div>
              <p className="px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores pariatur dicta facilis fugit minus, aut consequatur
                autem odit veniam temporibus sapiente animi sit architecto nulla
                nostrum. Eaque quo placeat culpa?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
