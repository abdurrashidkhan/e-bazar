"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rabbi Hosain",
    image: "https://placeimg.com/192/192/people",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "https://placeimg.com/192/192/people",
    content: "Ad, quaerat modi tempore architecto cumque maxime impedit...",
  },
  {
    id: 3,
    name: "Michael Chen",
    image: "https://placeimg.com/192/192/people",
    content: "Distinctio, quae? Voluptates neque ex sequi facere...",
  },
];

export default function Review() {
  return (
    <div className="container mx-auto px-4 my-5">
      <h1 className="text-2xl font-semibold text-[#2e3a4b] mb-6">
        Happy Clients
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="reviewSwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col lg:flex-row items-center gap-6 p-4 bg-white rounded-lg shadow-md">
              {/* Image Section */}
              <div className="relative w-48 h-48 shrink-0">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <div className="rating rating-sm mb-4">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${review.id}`}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={i === 2}
                    />
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {review.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
