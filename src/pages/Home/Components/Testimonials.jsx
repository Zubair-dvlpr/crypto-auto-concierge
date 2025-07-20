import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import avatar from "../../../assets/images/testimonialAvatar.png";
const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Amazing Service!",
    text: "I bought my first car with crypto, and CAC made it flawless. Funds verified, paperwork completed, and handover done on the spot. Couldn’t be easier.",
    user: "Tunde Adeboye",
    avatar: avatar,
  },
  {
    id: 2,
    rating: 5,
    title: "Highly Recommend",
    text: "I bought my first car with crypto, and CAC made it flawless. Funds verified, paperwork completed, and handover done on the spot. Couldn’t be easier.",
    user: "Jane Smith",
    avatar: avatar,
  },
  {
    id: 3,
    rating: 5,
    title: "Reliable & Professional",
    text: "I bought my first car with crypto, and CAC made it flawless. Funds verified, paperwork completed, and handover done on the spot. Couldn’t be easier.",
    user: "Emily Johnson",
    avatar: avatar,
  },
  {
    id: 4,
    rating: 5,
    title: "Exceptional Experience",
    text: "I bought my first car with crypto, and CAC made it flawless. Funds verified, paperwork completed, and handover done on the spot. Couldn’t be easier.",
    user: "Michael Brown",
    avatar: avatar,
  },
  {
    id: 5,
    rating: 5,
    title: "Very Satisfied!",
    text: "I bought my first car with crypto, and CAC made it flawless. Funds verified, paperwork completed, and handover done on the spot. Couldn’t be easier.",
    user: "Sophia Davis",
    avatar: avatar,
  },
];


const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-[1240px] relative mx-auto py-12 px-6">
      {/* Top Section - Subtitle & Heading */}
      <div className="mb-8">
        <h2 className="text-[34px] text-center font-semibold mt-4">
          Crypto Auto Concierge— Real Client Experiences
        </h2>
        <p className="text-lg text-center leading-7 mt-3 font-inter">
          Real Clients. Real Deals. Verified Payouts.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Connect custom buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className="mt-6"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-linear-65 from-[#2e6cf41a] to-[#00d2ff1a] p-5 rounded-lg">
              {/* User Info */}
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.user}
                  className="w-13 rounded-full mr-4"
                />
                <p className="font-semibold capitalize tracking-[1.54px] text-[22px] font-poppins text-xl">
                  {testimonial.user}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold leading-8 my-2">
                {testimonial.title}
              </h3>

              {/* Review Text */}
              <p className="text-base leading-8 mb-4">{testimonial.text}</p>

              {/* Rating */}
              <div className="flex mb-3 gap-1 text-[#FFA800]">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          ref={prevRef}
          className="bg-white cursor-pointer text-gray-800 border border-gray-300 p-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="bg-white cursor-pointer text-gray-800 border border-gray-300 p-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
