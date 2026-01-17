import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import bgImg from "../../../public/about/about-hero.png";
import ButtonTag from "./ButtonTag";
import TitleHeading from "./TitleHeading";
import BrandLogoSection from "../AboutUs/BrandLogoSection";

const HeroSection = ({ tag, title, description, showPlayButton = true }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Use embed URL for iframe
  const videoUrls = [
    "https://www.youtube.com/embed/ImeCpsAA47c" // Correct embed URL
  ];

  const handlePlayVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    setVideoUrl(videoUrls[randomIndex]);
    setShowVideo(true);
  };

  return (
    <>
      <section className="relative w-full pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ButtonTag tag={tag} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <TitleHeading tag="" heading={title} align="left" />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ amount: 0.3, once: false }}
              className="text-gray text-[16px] leading-7 border-0 lg:border-l-[2px] border-[#b10f0f] lg:pl-6"
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Hero Image / Video */}
        <div className="relative mt-20 w-full">
          {/* Image */}
           
            <img
              src={bgImg}
              alt="hero background"
              className="w-full h-[350px] sm:h-[400px] md:h-[520px] object-cover bg-black/100 opacity-90"
            />
          

          {/* Video Overlay */}
          {showVideo && (
            <div className="absolute inset-0 flex justify-center items-center bg-black/80 z-50">
              <div className="relative w-full max-w-3xl aspect-video">
                <iframe
                  className="w-full h-full rounded-md"
                  src={`${videoUrl}?autoplay=1`}
                  title="Hero Video"
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

          {/* Play Button */}
          {!showVideo && showPlayButton && (
            <button
              onClick={handlePlayVideo}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition"
            >
              <FaPlay size={22} />
            </button>
          )}
        </div>
      </section>

      <BrandLogoSection />
    </>
  );
};

export default HeroSection;
