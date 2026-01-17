import React from "react";
import { motion } from "framer-motion";
import CoreImg from "../../../public/about/core-logo.png";

import VectorLeft from "../../../public/about/Vector.png";
import VectorRight from "../../../public/about/Vector2.png";
import LineLeft from "../../../public/about/Lineleft.png";
import LineRight from "../../../public/about/Lineright.png";
import { TitleHeading } from "../UI";

// Fade + Upward Smooth Motion
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 1, 0.35, 1] },
  },
};

// Smooth zoom for the center image
const imageZoom = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const CoreValues = () => {
  return (
    <section className="relative w-full py-24 flex flex-col items-center overflow-hidden bg-white">

      {/* Title with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        <TitleHeading
          tag="Values"
          heading="Our Core Values"
          align="center"
          text="text-black"
        />
      </motion.div>

      {/* ================= DESKTOP DISPLAY ================= */}
      <div className="hidden relative mt-16 lg:flex items-center justify-center">

        {/* CORE LOGO */}
        <div className="w-[300px] h-[300px] lg:w-[260px] lg:h-[300px] xl:w-[360px] xl:h-[400px] rounded-full flex items-center justify-center">
          <img src={CoreImg} alt="Core Logo" className="w-full select-none" />
        </div>

        {/* Vectors (DO NOT TOUCH) */}
        <img src={VectorLeft} className="absolute -left-[98%] top-[12%] w-[330px] md:w-[430px]" />
        <img src={VectorRight} className="absolute -right-[98%] top-[12%] w-[330px] md:w-[430px]" />

        <img src={LineLeft} className="absolute -left-[98%] bottom-[35%] w-[330px] md:w-[430px]" />
        <img src={LineRight} className="absolute -right-[98%] bottom-[35%] w-[330px] md:w-[430px]" />

      </div>

      {/* TEXT POSITIONS (DESKTOP remains same) */}
      <div className="hidden lg:flex absolute top-[48%] xl:top-[44%] left-[2%] xl:left-[0] w-full lg:px-28 xl:px-36 justify-between">

        {/* LEFT TEXT – SAME */}
        <div className="flex flex-col gap-[70px] xl:gap-[120px]">
          <div>
            <h3 className="text-lg xl:text-[22px]  font-semibold text-black">Innovation</h3>
            <p className="lg:w-[250px] md:w-[270px] text-gray leading-[1.55] sm:text-sm lg:text-[16px]">
              We're the team that asks "what if?" Our lab is always buzzing with experiments, testing new materials and techniques because standing still isn't in our DNA.
            </p>
          </div>

          <div>
            <h3 className="text-lg xl:text-[22px] font-semibold text-back">Quality</h3>
            <p className="lg:w-[250px] md:w-[270px] text-gray leading-[1.55] sm:text-sm">
              Perfection isn't just a goal, it's our standard. Every coating that leaves our facility meets rigorous ISO standards because your reputation depends on our consistency.
            </p>
          </div>
        </div>

        {/* RIGHT TEXT – SAME */}
        <div className="flex flex-col items-end text-left gap-[70px] xl:gap-[120px] ">
          <div>
            <h3 className="text-lg xl:text-[22px] font-semibold text-back">Partnership</h3>
            <p className="lg:w-[250px] md:w-[270px] text-gray leading-[1.55] sm:text-sm ">
              Great business happens when people genuinely care about each other's success. We roll up our sleeves, listen to your challenges, and build solutions alongside you, not just for you.
            </p>
          </div>
          <div>
            <h3 className="text-lg xl:text-[22px] font-semibold text-back">Reliability</h3>
            <p className="lg:w-[250px] md:w-[270px] text-gray leading-[1.55] sm:text-sm">
              When we promise heat resistance, you get heat resistance. When we commit to durability, it lasts. Simple as that. Your trust is everything to us, and we honor it with performance that never disappoints.
            </p>
          </div>
        </div>
      </div>

      {/* ====================== MOBILE + TAB VIEW ====================== */}
      <motion.div
        className="flex flex-col gap-10 items-center lg:hidden mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.35, once: false }}
        transition={{ staggerChildren: 0.25 }}   // stagger smooth reveal
      >
        {/* Left Text */}
        <motion.div variants={fadeUp} className="text-center flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-semibold text-black">Innovation</h3>
            <p className="max-w-[300px] mx-auto text-[#4D4D4D]">
              We're the team that asks "what if?" Our lab is always buzzing with experiments, testing new materials and techniques because standing still isn't in our DNA.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">Quality</h3>
            <p className="max-w-[300px] mx-auto text-[#4D4D4D]">
              Perfection isn't just a goal, it's our standard. Every coating that leaves our facility meets rigorous ISO standards because your reputation depends on our consistency.
            </p>
          </div>
        </motion.div>

        {/* Center Image POP-IN */}
        <motion.img
          src={CoreImg}
          variants={imageZoom}
          className="w-[240px] mx-auto drop-shadow-xl"
        />

        {/* Right Text */}
        <motion.div variants={fadeUp} className="text-center flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-semibold text-black">Partnership</h3>
            <p className="max-w-[300px] mx-auto text-[#4D4D4D]">
              Great business happens when people genuinely care about each other's success. We roll up our sleeves, listen to your challenges, and build solutions alongside you, not just for you.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">Reliability</h3>
            <p className="max-w-[300px] mx-auto text-[#4D4D4D]">
              When we promise heat resistance, you get heat resistance. When we commit to durability, it lasts. Simple as that. Your trust is everything to us, and we honor it with performance that never disappoints.
            </p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default CoreValues;
