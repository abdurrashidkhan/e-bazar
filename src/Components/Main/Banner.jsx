"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import image1 from "../../assert/images/SlideCard/slide-1.png";
import image2 from "../../assert/images/SlideCard/slide-2.png";
import image3 from "../../assert/images/SlideCard/slide-3.png";
// Import images
const banners = [
  {
    id: 1,
    image: image1,
    title: "50% Off For Your First Shopping",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    id: 2,
    image: image2,
    title: "Summer Collection Launch",
    description: "Quaerat blanditiis quibusdam, autem suscipit enim...",
  },
  {
    id: 3,
    image: image3,
    title: "New Arrivals Everyday",
    description: "Distinctio, quae? Voluptates neque ex sequi facere...",
  },
];

export default function Banner() {
  return (
    <section className="container mx-auto px-4 w-full h-[80vh] md:h-[90vh]">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 p-6">
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  {banner.title}
                </h1>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  {banner.description}
                </p>
                <button className="bg-[#E94560] px-8 py-3 text-white rounded-lg hover:bg-[#d8344f] transition-colors duration-300">
                  Shop Now
                </button>
              </div>

              {/* Image Container */}
              <div className="md:w-1/2 relative w-full h-64 md:h-96">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-[#E94560]"></div>
        <div className="swiper-button-next !text-[#E94560]"></div>
      </Swiper>
    </section>
  );
}
