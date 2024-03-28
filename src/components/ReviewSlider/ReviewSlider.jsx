"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";

import "./ReviewSlider.css";

const ReviewSlider = () => {
  const [getIdx, setIdx] = useState(1);

  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        onSlideChange={() => setIdx(getIdx + 1)}
        className="flex justify-center items-center"
      >
        {Array.from({ length: 100 }).map((__, i) => (
          <SwiperSlide
            key={i}
            className={`${
              i === getIdx
                ? "border-4 border-green-800 !bg-red-900 !text-white"
                : "!bg-gray-400 border-red-400"
            }  p-10 text-black border`}
          >
            <p>
              Slide {i + 1} Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Enim, commodi.
            </p>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
