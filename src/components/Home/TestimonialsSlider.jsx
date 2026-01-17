import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Icons + images
import QuoteIcon from "../../../public/Home/quote.png";
import StarIcon from "../../../public/Home/star.png";
import Prev from "../../../public/Home/prev-arrow.png";
import Next from "../../../public/Home/next-arrow.png";

import user1 from "../../../public/Home/user1.png";
import user2 from "../../../public/Home/user1.png";
import user3 from "../../../public/Home/user1.png";
import user4 from "../../../public/Home/user1.png";
import VectorCard from "../../../public/Home/Vector-card.png";
import { TitleHeading } from "../UI";

const testimonials = [
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Aman John",
    img: user1,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    img: user2,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Cartle Wayn",
    img: user3,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Kajal Anderson",
    img: user4,
  },
];

const TestimonialsSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#2C0138] via-[#240233] to-[#18011F] text-white overflow-hidden opacity-90">
      {/* Heading */}
      <div className="text-center mb-12">
         <TitleHeading
              tag=" Testimonials"
              heading="Our Happy Clients"
              align="center"
              text="text-white"
            />
      </div>

      {/* Slider */}
      <div className="relative max-w-[1500px] mx-auto py-5 overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          navigation={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1.4 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="!py-5 overflow-hidden"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative transition-all duration-500 z-50 
                    ${
                      isActive
                        ? "opacity-100 scale-110"
                        : "opacity-40 scale-100"
                    }
                  `}
                >
                  {/* Card */}
                  {/* Card Wrapper */}
                  <div
                    className="relative h-[260px] w-[290px] lg:w-[230px] flex flex-col justify-between items-start px-6 py-6 overflow-hidden"
                    style={{
                      backgroundImage: `url(${VectorCard})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* Quote + Stars */}
                    <div className="flex items-center justify-between w-full">
                      <img
                        src={QuoteIcon}
                        alt="quote"
                        className="w-6 opacity-70"
                      />

                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <img
                            key={s}
                            src={StarIcon}
                            alt="star"
                            className="w-3"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <p className="mt-3 text-white/80  text-[13px]">
                      {item.text}
                    </p>
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-3 mt-2 pl-1">
                    <img
                      src={item.img}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                    <h4 className="text-md font-medium">{item.name}</h4>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <img src={Prev} className="w-6" />
          </button>

          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <img src={Next} className="w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
