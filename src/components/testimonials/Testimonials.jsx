import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eni laudantium facilis quas quae culpa voluptatibus cumque magniamet itaque consequuntur!",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eni laudantium facilis quas quae culpa voluptatibus cumque magniamet itaque consequuntur!",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eni laudantium facilis quas quae culpa voluptatibus cumque magniamet itaque consequuntur!",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eni laudantium facilis quas quae culpa voluptatibus cumque magniamet itaque consequuntur!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
