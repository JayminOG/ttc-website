import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/effect-fade";

import bg1 from "../../../public/Home/hero-bg1.jpg";
import bg2 from "../../../public/Home/hero-bg2.png";
import bg3 from "../../../public/Home/hero-bg3.png";
import { Button } from "../UI";
import ArrowRight from "../../../public/header/arrow-right.png";

const Hero = () => {
  const slides = [
    {
      id: 1,
      bg: bg1,
      title: "Next-Gen High Performance Non-stick coatings.",
      subtitle:
        "Experience advanced non-stick technology engineered for modern cookware and appliances. We deliver the perfect balance of innovation and consistency.",
    },
    {
      id: 2,
      bg: bg2,
      title: "Maximum Durability. Effortless Release.",
      subtitle:
        "Built to withstand long lasting release. Our superior coating systems ensure your products maintain their quality, release properties, and appearance over time.",
    },
    {
      id: 3,
      bg: bg3,
      title: "Surface Technology You Can Trust.",
      subtitle:
        "Delivering protective surface coating solutions—engineered to balance performance, safety, and sustainability.",
    },
  ];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-start"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70"></div>

              {/* CONTENT WRAPPER */}
              <div className="relative z-10 w-full max-w-6xl px-5 sm:px-8 xl:px-20">
                {/* TITLE */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="
                    text-white font-bold leading-tight
                    text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl
                   
                  "
                >
                  {slide.title}
                </motion.h1>

                {/* SUBTITLE */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="mt-4 sm:mt-6 text-white text-base sm:text-md md:text-md xl:text-xl max-w-2xl leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-6 sm:mt-8"
                >
                  <Button
                    text="Get A Quote"
                    onClick={() => (window.location.href = "/")}
                  />

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-white px-4 py-3 rounded-full text-white text-base sm:text-lg font-medium flex items-center gap-2"
                  >
                    Learn More
                    <span className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                      <img src={ArrowRight} alt="Arrow" className="w-4" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>

              {/* PAGINATION NUMBERS */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white text-lg sm:text-xl flex items-center gap-4 sm:gap-6">
                <span>{String(slide.id).padStart(2, "0")}</span>
                <div className="w-12 sm:w-20 h-[2px] bg-white hidden md:flex"></div>
                <span className="opacity-50 hidden md:flex">03</span>
              </div>

              {/* STATISTICS CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="absolute bottom-0 right-0 "
              >
                <div
                  className="
                    bg-white rounded-t-xl shadow-lg
                    px-6 py-5 sm:px-10 sm:py-8
                    flex gap-6 sm:gap-12 lg:gap-32 
                    overflow-x-auto
                    scrollbar-none
                  "
                >
                  {/* STAT BOXES */}
                  {[
                    { label: "Years of Experience", value: 25, isNumber: true },
                    { label: "2015 Certified", value: "ISO 9001", isNumber: false },
                    { label: "Solutions", value: "Customized", isNumber: false },
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <h2 className="text-2xl sm:text-3xl font-bold text-black">
                        {stat.isNumber ? (
                          <>
                            <CountUp end={stat.value} duration={3} separator="," />+
                          </>
                        ) : (
                          stat.value
                        )}
                      </h2>
                      <p className="text-gray text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;