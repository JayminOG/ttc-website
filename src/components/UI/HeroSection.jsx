import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ButtonTag from "./ButtonTag";
import TitleHeading from "./TitleHeading";
import BrandLogoSection from "../AboutUs/BrandLogoSection";

// ─── Slider Settings (edit here) ────────────────────────────────────────────
const SLIDER_CONFIG = {
  autoPlay: true,          // enable/disable auto-play
  autoPlayInterval: 4000,  // ms between slides
  showDots: true,          // show dot indicators
  showArrows: true,        // show prev/next arrows
  transitionDuration: 700, // ms for fade transition
};
// ────────────────────────────────────────────────────────────────────────────

const HeroSection = ({
  tag,
  title,
  description,
  showPlayButton = true,
  // Accept both single value or array for image & mobileImage
  // Single:  image="hero.png"  mobileImage="hero-mobile.png"
  // Multi:   image={["hero1.png","hero2.png"]}  mobileImage={["m1.png","m2.png"]}
  image,
  mobileImage,
  videoUrls = [],
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Normalise to arrays
  const images = image
    ? Array.isArray(image)
      ? image
      : [image]
    : [];

  const mobileImages = mobileImage
    ? Array.isArray(mobileImage)
      ? mobileImage
      : [mobileImage]
    : [];

  const isSlider = images.length > 1;
  const totalSlides = images.length;

  // ── Slide transition helper ──────────────────────────────────────────────
  const goToSlide = useCallback(
    (index) => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((index + totalSlides) % totalSlides);
        setFade(true);
      }, SLIDER_CONFIG.transitionDuration / 2);
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // ── Auto-play ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isSlider || !SLIDER_CONFIG.autoPlay || showVideo) return;
    const timer = setInterval(nextSlide, SLIDER_CONFIG.autoPlayInterval);
    return () => clearInterval(timer);
  }, [isSlider, showVideo, nextSlide]);

  // ── Video handlers ───────────────────────────────────────────────────────
  const handlePlayVideo = () => {
    if (!videoUrls?.length) return;
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    setVideoUrl(videoUrls[randomIndex]);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoUrl("");
  };

  return (
    <>
      <section className="relative w-full pt-20 pb-0">
        {/* ── Header text ── */}
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

        {/* ── Image / Slider ── */}
        {images.length > 0 && (
          <div className="relative mt-20 w-full overflow-hidden">
            {/* Image */}
            <picture>
              {mobileImages[currentSlide] && (
                <source
                  media="(max-width: 767px)"
                  srcSet={mobileImages[currentSlide]}
                />
              )}
              <img
                src={images[currentSlide]}
                alt={`hero slide ${currentSlide + 1}`}
                style={{
                  opacity: fade ? 1 : 0,
                  transition: `opacity ${SLIDER_CONFIG.transitionDuration}ms ease-in-out`,
                }}
                className="w-full h-auto object-contain"
              />
            </picture>

            {/* ── Slider controls (only when multiple images) ── */}
            {isSlider && (
              <>
                {/* Prev arrow */}
                {SLIDER_CONFIG.showArrows && (
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                )}

                {/* Next arrow */}
                {SLIDER_CONFIG.showArrows && (
                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition"
                  >
                    <FaChevronRight size={16} />
                  </button>
                )}

                {/* Dot indicators */}
                {SLIDER_CONFIG.showDots && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ── Video overlay ── */}
            {showVideo && videoUrl && (
              <div style={{ zIndex: 9999 }} className="fixed inset-0 flex justify-center items-center bg-black/80">
                <div className="relative w-full max-w-3xl aspect-video px-4">
                  <iframe
                    className="w-full h-full rounded-md"
                    src={`${videoUrl}?autoplay=1`}
                    title="Hero Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-3 right-7 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* ── Play button ── */}
            {!showVideo && showPlayButton && videoUrls?.length > 0 && (
              <button
                onClick={handlePlayVideo}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition"
              >
                <FaPlay size={22} />
              </button>
            )}
          </div>
        )}
      </section>

      <BrandLogoSection />
    </>
  );
};

export default HeroSection;