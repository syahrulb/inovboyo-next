"use client";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "@/public/images/carousell-depan/inovboyo_instagram.webp";
import slider2 from "@/public/images/carousell-depan/sosialisasi_inoboyot_2024.webp";
import slider3 from "@/public/images/carousell-depan/sosialisasi-inovboyo-2024-pd.webp";
import slider4 from "@/public/images/carousell-depan/timeline.webp";
import { useThemeStore } from "@/store";

const SwiperApp = () => {
  const { isRtl } = useThemeStore();
  return (
    <Swiper
      key={`${isRtl}-swiper`}
      dir={isRtl ? "rtl" : "ltr"}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 50500,
        disableOnInteraction: false,
      }}
      className="w-full h-80 rounded-2xl "
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bottom": "40px",
        "--swiper-pagination-bullet-size": "10px",
      }}
    >
      <SwiperSlide>
        <div className="w-auto h-full  justify-center items-top">
          <Image
            src={slider1}
            alt="image"
            className=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-auto h-full  justify-center items-top">
          <Image
            src={slider2}
            alt="image"
            className=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-auto h-full  justify-center items-top">
          <Image
            src={slider3}
            alt="image"
            className=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-auto h-full  justify-center items-top">
          <Image
            src={slider4}
            alt="image"
            className=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperApp;
