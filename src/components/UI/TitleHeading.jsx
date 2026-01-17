import React from "react";
import { motion } from "framer-motion";
import star from "../../../public/about/star.png";

const TitleHeading = ({ tag, heading, align = "left", text }) => {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  /** Smooth Floating Animation Variants */
  const container = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // ★ smoother ease-out curve
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.25, 0.1, 0.25, 1.0], // ★ more natural fade
      }
    }
  };

  return (
    <motion.div
      className={`flex flex-col ${alignment} gap-2`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: false }} // replays smoothly every time
    >
      {tag && (
        <motion.button
          variants={item}
          className="flex items-center gap-2 text-blue border-2 border-blue text-md font-semibold px-4 py-2 rounded-full 
          bg-[#F1F5FF] hover:bg-[#e5ecff] transition"
        >
          <img src={star} alt="star" height={2} />
          {tag}
        </motion.button>
      )}

      {heading && (
        <motion.h1
          variants={item}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold ${text} leading-snug pt-3`}
        >
          {heading}
        </motion.h1>
      )}
    </motion.div>
  );
};

export default TitleHeading;
