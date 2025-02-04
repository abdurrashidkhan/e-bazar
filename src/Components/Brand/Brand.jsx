"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import Imgae1 from "../../assert/images/BrandLogo/1.png";
import Imgae10 from "../../assert/images/BrandLogo/10.png";
import Imgae11 from "../../assert/images/BrandLogo/11.png";
import Imgae12 from "../../assert/images/BrandLogo/12.png";
import Imgae13 from "../../assert/images/BrandLogo/13.png";
import Imgae2 from "../../assert/images/BrandLogo/2.png";
import Imgae3 from "../../assert/images/BrandLogo/3.png";
import Imgae4 from "../../assert/images/BrandLogo/4.png";
import Imgae5 from "../../assert/images/BrandLogo/5.png";
import Imgae6 from "../../assert/images/BrandLogo/6.png";
import Imgae7 from "../../assert/images/BrandLogo/7.png";
import Imgae8 from "../../assert/images/BrandLogo/8.png";
import Imgae9 from "../../assert/images/BrandLogo/9.png";

const brandLogos = [
  { image: Imgae1 },
  { image: Imgae2 },
  { image: Imgae3 },
  { image: Imgae4 },
  { image: Imgae5 },
  { image: Imgae6 },
  { image: Imgae7 },
  { image: Imgae8 },
  { image: Imgae9 },
  { image: Imgae10 },
  { image: Imgae11 },
  { image: Imgae12 },
  { image: Imgae13 },
];

export default function Brand() {
  return (
    <div className="container mx-auto px-4" id="brandLogo">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-[#2e3a4b]">Top Brand</h1>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[100px]">
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={logo?.image}
                  alt={`Brand Logo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 100px"
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
