import React from "react";
import { motion } from "framer-motion";
import checkIcon from "../../../public/brands/check-red.png";
import { TitleHeading } from "../UI";

/* ------------------ Animation Variants ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const BrandDetailSection = ({
  badgeText = "Our Brands",
  heading,
  BrandHeading,
  description,
  description2,
  description3,
  benefits = [],
  applications,
  image,
  logo,
}) => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }}
          variants={fadeUp}
          className="mb-8 sm:mb-12 lg:mb-14"
        >
          <TitleHeading
            tag={badgeText}
            heading={BrandHeading}
            align="center"
            text="text-black"
          />
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: false }}
          variants={staggerContainer}
          className="bg-[#F7F8FE] rounded-xl sm:rounded-2xl lg:rounded-[10px] 
                     p-5 sm:p-8 lg:p-12"
        >
          {/* BRAND TITLE */}
          <motion.h3
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4"
          >
            {heading}
          </motion.h3>

          {/* DESCRIPTIONS */}
          <motion.p
            variants={fadeUp}
            className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-4"
          >
            {description}
          </motion.p>

          {description2 && (
            <motion.p
              variants={fadeUp}
              className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              {description2}
            </motion.p>
          )}

          {/* CONTENT GRID */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT SIDE */}
            <motion.div variants={staggerContainer}>
              <motion.h4
                variants={fadeUp}
                className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4"
              >
                Key Benefits
              </motion.h4>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {benefits.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex gap-3 text-gray text-sm sm:text-base"
                  >
                    <img
                      src={checkIcon}
                      className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                      alt="check"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {applications && (
                <>
                  <motion.h4
                    variants={fadeUp}
                    className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3"
                  >
                    Applications Surfaces
                  </motion.h4>

                  <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap gap-2 sm:gap-3 bg-[#F7F8FE] rounded-lg p-2 sm:p-3"
                  >
                    {applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-black font-semibold"
                      >
                        {index + 1}. {app}
                      </span>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              variants={imageAnim}
              className="relative"
            >
              {logo && (
                <div className="absolute -top-12 sm:-top-16 lg:-top-24 left-4 sm:left-6 rounded-xl z-10">
                  <img src={logo} alt="logo" className="h-30 object-contain" />
                </div>
              )}

              <img
                src={image}
                alt={heading}
                className="w-full h-[260px] sm:h-[320px] lg:h-[460px] object-cover lg:object-contain rounded-xl sm:rounded-2xl"
              />
            </motion.div>
          </div>

          {/* FOOTER DESCRIPTION */}
          {description3 && (
            <motion.p
              variants={fadeUp}
              className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mt-6 sm:mt-8"
            >
              {description3}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandDetailSection;
