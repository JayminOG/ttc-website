import React from "react";
import GirlImage from "../../../public/about/IntroImage.png";
import { Button, TitleHeading } from "../UI";
import { motion } from "framer-motion";

// ⬇ Soft & Smooth Variant
const smoothFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // buttery smooth
    },
  },
};

// Soft left slide image animation
const smoothImage = {
  hidden: { opacity: 0, x: -50, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const AboutIntroSection = ({ hidden }) => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          variants={smoothImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={GirlImage}
            alt="about-person"
            className="z-20 w-full md:w-[380px] lg:w-[430px] object-contain"
          />
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}  // smoother stagger timing
          className="text-left"
        >

          {/* HEADING */}
          <motion.div variants={smoothFadeUp}>
            <TitleHeading
              tag="About Us"
              heading="The Journey Of A Thousand Miles Begins With One Step"
              align="left"
              text="text-black"
            />
          </motion.div>

          {/* SUBHEADING */}
          <motion.p variants={smoothFadeUp} className="text-lg mt-3 font-semibold text-blue">
            25+ Years Of Experience In This Field
          </motion.p>

          {/* PARAGRAPH 1 */}
          <motion.p variants={smoothFadeUp} className="text-gray mt-5 leading-relaxed">
            TTC is a dynamic and innovative startup specializing in cutting-edge coating solutions across a wide range of industries. Founded with a vision to deliver performance-driven and reliable surface technologies, TTC is committed to meeting the evolving demands of modern manufacturing.
          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p variants={smoothFadeUp} className="text-gray mt-5 leading-relaxed">
            Our primary focus lies in providing high-performance non-stick coatings and ceramic coatings for cookware, bakeware, and electrical appliances. These solutions are engineered to deliver superior release, durability, heat resistance, and consistent performance—helping manufacturers enhance product quality and operational efficiency.
In addition to our core expertise, TTC offers a comprehensive range of industrial coatings, including UV/LED curable coatings for wood, plastics, and metals. We also specialize in customized and application-specific coating solutions, tailored to address unique industrial challenges across diverse sectors.
          </motion.p>

          {/* PARAGRAPH 3 */}
          <motion.p variants={smoothFadeUp} className="text-gray mt-5 leading-relaxed">
            TTC is an ISO 9001:2015 certified company, reflecting our strong commitment to quality management, process consistency, and continual improvement. Quality, innovation, and customer satisfaction are embedded in every stage of our operations.
          </motion.p>

          {/* PARAGRAPH 4 */}
          <motion.p variants={smoothFadeUp} className="text-gray mt-5 leading-relaxed">
            At TTC, we combine advanced technology with deep industry insight to build long-term partnerships and deliver coating solutions that perform beyond expectations.
          </motion.p>

          {/* BUTTON */}
          {!hidden && (
            <motion.div variants={smoothFadeUp} className="pt-5">
              <Button text="Get A Quote" onClick={() => (window.location.href = "/")} />
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
