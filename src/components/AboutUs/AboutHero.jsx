import React from "react";
import backgroundImg from "../../assets/images/background-hero.png";
import RectangleFram from "../../assets/images/Rectangle-fram.png";
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
import vectorGImg from "../../assets/AboutUsimages/Vector-G.png";

const AboutHero = () => {
  return (
    <section className="relative w-full pt-16  pb-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

      {/* Rectangle Frame - Top */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Top"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-90 z-[1] pointer-events-none"
      />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left max-w-lg">
          <div className="text-sm md:text-base font-medium text-blue inline-block px-3 py-1 rounded-md mb-2">
            //  WELCOME TO GREENAGE //
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-[#231A1C]">
            About Us
          </h1>

        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-center items-center mb-8 md:mb-0">
          {/* Vector-G Image (Behind about-group) */}
          <img
            src={vectorGImg}
            alt="Vector G"
            className="absolute -right-10 -top-5 w-full h-full object-contain opacity-16 z-[2]"
          />

          {/* Background Gradient Box */}
          <div className="absolute -top-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-40 z-[1]"></div>

          {/* About Group Image */}
          <img
            src={aboutGroupImg}
            alt="About Us"
            className="relative z-[3] w-56  md:w-full lg:w-full  drop-shadow-xl rounded-xl"
          />
        </div>
      </div>

      {/* Rectangle Frame - Bottom */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Bottom"
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full opacity-90 z-[1] pointer-events-none"
      />
    </section>
  );
};

export default AboutHero;