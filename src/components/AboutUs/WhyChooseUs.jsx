import React, { useState } from "react";
import { motion } from "framer-motion";
import LeaderImage from "../../../public/about/LeaderImage.png";
import { TitleHeading } from "../UI";
import { FaTimes } from "react-icons/fa";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const videoUrls = [
    "https://www.youtube.com/embed/ImeCpsAA47c", // Example embed video
  ];

  const handlePlayVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    setVideoUrl(videoUrls[randomIndex]);
    setShowVideo(true);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 px-6 text-white">

        {/* LEFT SIDE TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <TitleHeading
            tag="Why Choose Us"
            heading="Leaders in Advanced Coating Solutions"
            text="text-black"
            align="left"
          />

          <motion.p variants={fadeUp} className="text-gray mt-4 max-w-md">
            We are a leading provider of industrial coating systems designed to
            withstand extreme environments and deliver superior protection. From
            corrosion-resistant finishes to high-performance decorative coatings,
            our products are engineered with precision and backed by rigorous testing.
            Partnering with manufacturers, builders
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE IMAGE / VIDEO */}
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex justify-center cursor-pointer"
          onClick={!showVideo ? handlePlayVideo : undefined}
        >
          {!showVideo && (
            <img
              src={LeaderImage}
              alt="Leader"
              className="w-[440px] lg:w-[520px] drop-shadow-xl"
            />
          )}

          {showVideo && (
            <div className="flex justify-center items-center z-50 bg-black/80 py-20 w-[400px] lg:w-[520px] h-[100px] lg:h-[300px] rounded-xl">
              <div className="relative w-full max-w-3xl aspect-video">
                <iframe
                  className="w-full h-full rounded-xl "
                  src={`${videoUrl}?autoplay=1`}
                  title="Leader Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-3 right-3 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
