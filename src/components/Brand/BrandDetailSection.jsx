import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ------------------ Star Rating Component ------------------ */
const StarRating = ({ total = 5, filled = 0 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: total }).map((_, i) => {
        const full = i < Math.floor(filled);
        const half = !full && i < filled;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="#FFA500"
            strokeWidth={1.5}
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={full ? "#FFA500" : half ? `url(#half-${i})` : "none"}
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.601a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        );
      })}
    </div>
  );
};

/* ------------------ Helper: Parse App Item ------------------ */
const parseAppItem = (app) => {
  const starMatch = app.match(/^(.*?)[–\-]\s*(\d+(?:\.\d+)?)\s*stars?$/i);
  if (starMatch) {
    return {
      label: starMatch[1].trim(),
      type: "star",
      filled: parseFloat(starMatch[2]),
      total: 5,
    };
  }
  return { label: app, type: "text" };
};

/* ------------------ Image Slideshow ------------------ */
const ImageSlideshow = ({ images, heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="w-full h-[260px] sm:h-[320px] lg:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden">
        <img
          src={images[0]}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${heading} ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ------------------ Main Component ------------------ */
const BrandDetailSection = ({
  badgeText = "Our Brands",
  heading,
  BrandHeading,
  description,
  description2,
  description3,
  benefits = [],
  applications,
  images = [],
  image,
  logo,
}) => {
  const imageList = images.length > 0 ? images : image ? [image] : [];

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
          {logo && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <img
                src={logo}
                alt="Brand Logo"
                className="h-16 sm:h-20 object-contain"
              />
            </div>
          )}
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: false }}
          variants={staggerContainer}
          className="bg-[#F7F8FE] rounded-xl sm:rounded-2xl lg:rounded-[10px] p-5 sm:p-8 lg:p-12"
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
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

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
                    Product Information
                  </motion.h4>

                  <motion.ul
                    variants={fadeUp}
                    className="bg-[#F7F8FE] rounded-lg p-2 sm:p-3 flex flex-col"
                  >
                    {applications.map((app, index) => {
                      const parsed = parseAppItem(app);
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-black font-semibold"
                        >
                          <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0"></span>
                          {parsed.type === "star" ? (
                            <span className="flex items-center gap-2">
                              {parsed.label} –
                              <StarRating
                                total={parsed.total}
                                filled={parsed.filled}
                              />
                            </span>
                          ) : (
                            app
                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                </>
              )}
            </motion.div>

            {/* RIGHT SIDE — IMAGE SLIDESHOW */}
            <motion.div variants={imageAnim} className="relative">
              <ImageSlideshow images={imageList} heading={heading} />
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















// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import checkIcon from "../../../public/brands/check-red.png";
// import { TitleHeading } from "../UI";

// /* ------------------ Animation Variants ------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const imageAnim = {
//   hidden: { opacity: 0, x: 40, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// /* ------------------ Star Rating Component ------------------ */
// const StarRating = ({ total = 5, filled = 0 }) => {
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: total }).map((_, i) => {
//         const full = i < Math.floor(filled);
//         const half = !full && i < filled;
//         return (
//           <svg
//             key={i}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="w-4 h-4"
//             fill="none"
//             stroke="#FFA500"
//             strokeWidth={1.5}
//           >
//             <defs>
//               <linearGradient id={`half-${i}`}>
//                 <stop offset="50%" stopColor="#FFA500" />
//                 <stop offset="50%" stopColor="transparent" />
//               </linearGradient>
//             </defs>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               fill={full ? "#FFA500" : half ? `url(#half-${i})` : "none"}
//               d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.601a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
//             />
//           </svg>
//         );
//       })}
//     </div>
//   );
// };

// /* ------------------ Helper: Parse App Item ------------------ */
// const parseAppItem = (app) => {
//   const starMatch = app.match(/^(.*?)[–\-]\s*(\d+(?:\.\d+)?)\s*stars?$/i);
//   if (starMatch) {
//     return {
//       label: starMatch[1].trim(),
//       type: "star",
//       filled: parseFloat(starMatch[2]),
//       total: 5,
//     };
//   }
//   return { label: app, type: "text" };
// };

// /* ------------------ Image Slideshow ------------------ */
// const ImageSlideshow = ({ images, heading }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!images || images.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   if (images.length === 1) {
//     return (
//       <div className="w-full h-[260px] sm:h-[320px] lg:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden">
//         <img
//           src={images[0]}
//           alt={heading}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           alt={`${heading} ${currentIndex + 1}`}
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         />
//       </AnimatePresence>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               idx === currentIndex ? "bg-white scale-125" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ------------------ Main Component ------------------ */
// const BrandDetailSection = ({
//   badgeText = "Our Brands",
//   heading,
//   BrandHeading,
//   description,
//   description2,
//   description3,
//   benefits = [],
//   applications,
//   images = [],
//   image,
//   logo,
// }) => {
//   const imageList = images.length > 0 ? images : image ? [image] : [];

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-20">
//       <div className="container max-w-7xl mx-auto">

//         {/* SECTION TITLE */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.3, once: false }}
//           variants={fadeUp}
//           className="mb-8 sm:mb-12 lg:mb-14"
//         >
//           <TitleHeading
//             tag={badgeText}
//             heading={BrandHeading}
//             align="center"
//             text="text-black"
//           />
//         </motion.div>

//         {/* MAIN CARD */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.25, once: false }}
//           variants={staggerContainer}
//           className="bg-[#F7F8FE] rounded-xl sm:rounded-2xl lg:rounded-[10px] p-5 sm:p-8 lg:p-12"
//         >
//           {/* BRAND TITLE */}
//           <motion.h3
//             variants={fadeUp}
//             className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4"
//           >
//             {heading}
//           </motion.h3>

//           {/* DESCRIPTIONS */}
//           <motion.p
//             variants={fadeUp}
//             className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-4"
//           >
//             {description}
//           </motion.p>

//           {description2 && (
//             <motion.p
//               variants={fadeUp}
//               className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
//             >
//               {description2}
//             </motion.p>
//           )}

//           {/* CONTENT GRID */}
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

//             {/* LEFT SIDE */}
//             <motion.div variants={staggerContainer}>
//               <motion.h4
//                 variants={fadeUp}
//                 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4"
//               >
//                 Key Benefits
//               </motion.h4>

//               <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                 {benefits.map((item, index) => (
//                   <motion.li
//                     key={index}
//                     variants={fadeUp}
//                     className="flex gap-3 text-gray text-sm sm:text-base"
//                   >
//                     <img
//                       src={checkIcon}
//                       className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
//                       alt="check"
//                     />
//                     <span>{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               {applications && (
//                 <>
//                   <motion.h4
//                     variants={fadeUp}
//                     className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3"
//                   >
//                     Product Information
//                   </motion.h4>

//                   <motion.ul
//                     variants={fadeUp}
//                     className="bg-[#F7F8FE] rounded-lg p-2 sm:p-3 flex flex-col"
//                   >
//                     {applications.map((app, index) => {
//                       const parsed = parseAppItem(app);
//                       return (
//                         <li
//                           key={index}
//                           className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-black font-semibold"
//                         >
//                           <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0"></span>
//                           {parsed.type === "star" ? (
//                             <span className="flex items-center gap-2">
//                               {parsed.label} –
//                               <StarRating
//                                 total={parsed.total}
//                                 filled={parsed.filled}
//                               />
//                             </span>
//                           ) : (
//                             app
//                           )}
//                         </li>
//                       );
//                     })}
//                   </motion.ul>
//                 </>
//               )}
//             </motion.div>

//             {/* RIGHT SIDE — IMAGE SLIDESHOW */}
//             <motion.div variants={imageAnim} className="relative">
//               {logo && (
//                 <div className="absolute -top-12 sm:-top-16 lg:-top-20 left-4 sm:left-6 rounded-xl z-10">
//                   <img src={logo} alt="logo" className="h-30 object-contain" />
//                 </div>
//               )}
//               <ImageSlideshow images={imageList} heading={heading} />
//             </motion.div>
//           </div>

//           {/* FOOTER DESCRIPTION */}
//           {description3 && (
//             <motion.p
//               variants={fadeUp}
//               className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mt-6 sm:mt-8"
//             >
//               {description3}
//             </motion.p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BrandDetailSection;


















// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import checkIcon from "../../../public/brands/check-red.png";
// import { TitleHeading } from "../UI";

// /* ------------------ Animation Variants ------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const imageAnim = {
//   hidden: { opacity: 0, x: 40, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// /* ------------------ Star Rating Component ------------------ */
// const StarRating = ({ total = 5, filled = 0 }) => {
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: total }).map((_, i) => {
//         const full = i < Math.floor(filled);
//         const half = !full && i < filled;
//         return (
//           <svg
//             key={i}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="w-4 h-4"
//             fill="none"
//             stroke="#FFA500"
//             strokeWidth={1.5}
//           >
//             <defs>
//               <linearGradient id={`half-${i}`}>
//                 <stop offset="50%" stopColor="#FFA500" />
//                 <stop offset="50%" stopColor="transparent" />
//               </linearGradient>
//             </defs>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               fill={full ? "#FFA500" : half ? `url(#half-${i})` : "none"}
//               d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.601a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
//             />
//           </svg>
//         );
//       })}
//     </div>
//   );
// };

// /* ------------------ Helper: Parse App Item ------------------ */
// const parseAppItem = (app) => {
//   // Matches: "Non-stick effect – 4 star" or "Non-stick effect - 4 stars"
//   const starMatch = app.match(/^(.*?)[–\-]\s*(\d+(?:\.\d+)?)\s*stars?$/i);
// if (starMatch) {
//   return {
//     label: starMatch[1].trim(),
//     type: "star",
//     filled: parseFloat(starMatch[2]),
//     total: 5,
//   };
// }
//   return { label: app, type: "text" };
// };

// /* ------------------ Image Slideshow ------------------ */
// const ImageSlideshow = ({ images, heading }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!images || images.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   if (images.length === 1) {
//     return (
//       <img
//         src={images[0]}
//         alt={heading}
//         className="w-full h-[260px] sm:h-[320px] lg:h-[460px] object-cover lg:object-contain rounded-xl sm:rounded-2xl"
//       />
//     );
//   }

//   return (
//     <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           alt={`${heading} ${currentIndex + 1}`}
//           className="absolute inset-0 w-full h-full object-cover lg:object-contain rounded-xl sm:rounded-2xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         />
//       </AnimatePresence>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               idx === currentIndex ? "bg-white scale-125" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ------------------ Main Component ------------------ */
// const BrandDetailSection = ({
//   badgeText = "Our Brands",
//   heading,
//   BrandHeading,
//   description,
//   description2,
//   description3,
//   benefits = [],
//   applications,
//   images = [],
//   image,
//   logo,
// }) => {
//   const imageList = images.length > 0 ? images : image ? [image] : [];

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-20">
//       <div className="container max-w-7xl mx-auto">

//         {/* SECTION TITLE */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.3, once: false }}
//           variants={fadeUp}
//           className="mb-8 sm:mb-12 lg:mb-14"
//         >
//           <TitleHeading
//             tag={badgeText}
//             heading={BrandHeading}
//             align="center"
//             text="text-black"
//           />
//         </motion.div>

//         {/* MAIN CARD */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.25, once: false }}
//           variants={staggerContainer}
//           className="bg-[#F7F8FE] rounded-xl sm:rounded-2xl lg:rounded-[10px] p-5 sm:p-8 lg:p-12"
//         >
//           {/* BRAND TITLE */}
//           <motion.h3
//             variants={fadeUp}
//             className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4"
//           >
//             {heading}
//           </motion.h3>

//           {/* DESCRIPTIONS */}
//           <motion.p
//             variants={fadeUp}
//             className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-4"
//           >
//             {description}
//           </motion.p>

//           {description2 && (
//             <motion.p
//               variants={fadeUp}
//               className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
//             >
//               {description2}
//             </motion.p>
//           )}

//           {/* CONTENT GRID */}
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

//             {/* LEFT SIDE */}
//             <motion.div variants={staggerContainer}>
//               <motion.h4
//                 variants={fadeUp}
//                 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4"
//               >
//                 Key Benefits
//               </motion.h4>

//               <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                 {benefits.map((item, index) => (
//                   <motion.li
//                     key={index}
//                     variants={fadeUp}
//                     className="flex gap-3 text-gray text-sm sm:text-base"
//                   >
//                     <img
//                       src={checkIcon}
//                       className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
//                       alt="check"
//                     />
//                     <span>{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               {applications && (
//                 <>
//                   <motion.h4
//                     variants={fadeUp}
//                     className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3"
//                   >
//                     Product Information
//                   </motion.h4>

//                   <motion.ul
//                     variants={fadeUp}
//                     className="bg-[#F7F8FE] rounded-lg p-2 sm:p-3 flex flex-col"
//                   >
//                     {applications.map((app, index) => {
//                       const parsed = parseAppItem(app);
//                       return (
//                         <li
//                           key={index}
//                           className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-black font-semibold"
//                         >
//                           <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0"></span>
//                           {parsed.type === "star" ? (
//                             <span className="flex items-center gap-2">
//                               {parsed.label} –
//                               <StarRating
//                                 total={parsed.total}
//                                 filled={parsed.filled}
//                               />
//                             </span>
//                           ) : (
//                             app
//                           )}
//                         </li>
//                       );
//                     })}
//                   </motion.ul>
//                 </>
//               )}
//             </motion.div>

//             {/* RIGHT SIDE — IMAGE SLIDESHOW */}
//             <motion.div variants={imageAnim} className="relative">
//               {logo && (
//                 <div className="absolute -top-12 sm:-top-16 lg:-top-20 left-4 sm:left-6 rounded-xl z-10">
//                   <img src={logo} alt="logo" className="h-30 object-contain" />
//                 </div>
//               )}
//               <ImageSlideshow images={imageList} heading={heading} />
//             </motion.div>
//           </div>

//           {/* FOOTER DESCRIPTION */}
//           {description3 && (
//             <motion.p
//               variants={fadeUp}
//               className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mt-6 sm:mt-8"
//             >
//               {description3}
//             </motion.p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BrandDetailSection;

























// import React from "react";
// import { motion } from "framer-motion";
// import checkIcon from "../../../public/brands/check-red.png";
// import { TitleHeading } from "../UI";

// /* ------------------ Animation Variants ------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const imageAnim = {
//   hidden: { opacity: 0, x: 40, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const BrandDetailSection = ({
//   badgeText = "Our Brands",
//   heading,
//   BrandHeading,
//   description,
//   description2,
//   description3,
//   benefits = [],
//   applications,
//   image,
//   logo,
// }) => {
//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-20">
//       <div className="container max-w-7xl mx-auto">

//         {/* SECTION TITLE */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.3, once: false }}
//           variants={fadeUp}
//           className="mb-8 sm:mb-12 lg:mb-14"
//         >
//           <TitleHeading
//             tag={badgeText}
//             heading={BrandHeading}
//             align="center"
//             text="text-black"
//           />
//         </motion.div>

//         {/* MAIN CARD */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.25, once: false }}
//           variants={staggerContainer}
//           className="bg-[#F7F8FE] rounded-xl sm:rounded-2xl lg:rounded-[10px] 
//                      p-5 sm:p-8 lg:p-12"
//         >
//           {/* BRAND TITLE */}
//           <motion.h3
//             variants={fadeUp}
//             className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4"
//           >
//             {heading}
//           </motion.h3>

//           {/* DESCRIPTIONS */}
//           <motion.p
//             variants={fadeUp}
//             className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-4"
//           >
//             {description}
//           </motion.p>

//           {description2 && (
//             <motion.p
//               variants={fadeUp}
//               className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
//             >
//               {description2}
//             </motion.p>
//           )}

//           {/* CONTENT GRID */}
//           <div
//             className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
//           >
//             {/* LEFT SIDE */}
//             <motion.div variants={staggerContainer}>
//               <motion.h4
//                 variants={fadeUp}
//                 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4"
//               >
//                 Key Benefits
//               </motion.h4>

//               <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                 {benefits.map((item, index) => (
//                   <motion.li
//                     key={index}
//                     variants={fadeUp}
//                     className="flex gap-3 text-gray text-sm sm:text-base"
//                   >
//                     <img
//                       src={checkIcon}
//                       className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
//                       alt="check"
//                     />
//                     <span>{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               {applications && (
//                 <>
//                   <motion.h4
//                     variants={fadeUp}
//                     className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3"
//                   >
//                    Product Information  {/* Applications Surfaces */}
//                   </motion.h4>

//                   <motion.ul
//                     variants={fadeUp}
//                     className="bg-[#F7F8FE] rounded-lg p-2 sm:p-3 flex flex-col"
//                   >
//                     {applications.map((app, index) => (
//                       <li
//                         key={index}
//                         className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-black font-semibold"
//                       >
//                         <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0"></span>
//                         {app}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 </>
//               )}
//             </motion.div>

//             {/* RIGHT SIDE IMAGE */}
//             <motion.div
//               variants={imageAnim}
//               className="relative"
//             >
//               {logo && (
//                 <div className="absolute -top-12 sm:-top-16 lg:-top-20 left-4 sm:left-6 rounded-xl z-10">
//                   <img src={logo} alt="logo" className="h-30 object-contain" />
//                 </div>
//               )}

//               <img
//                 src={image}
//                 alt={heading}
//                 className="w-full h-[260px] sm:h-[320px] lg:h-[460px] object-cover lg:object-contain rounded-xl sm:rounded-2xl"
//               />
//             </motion.div>
//           </div>

//           {/* FOOTER DESCRIPTION */}
//           {description3 && (
//             <motion.p
//               variants={fadeUp}
//               className="text-gray text-sm sm:text-base lg:text-lg leading-relaxed mt-6 sm:mt-8"
//             >
//               {description3}
//             </motion.p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BrandDetailSection;
