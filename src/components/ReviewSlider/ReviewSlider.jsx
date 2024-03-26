"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";

import "./ReviewSlider.css"

const ReviewSlider = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
      >
        {Array.from({ length: 100 }).map((__, i) => (
          <SwiperSlide
            key={i}
            className="w-[400px] h-[400px] p-10 bg-gray-100 text-black border border-red-400"
          >
            <div>
              Slide {i + 1} Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Enim, commodi.
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
