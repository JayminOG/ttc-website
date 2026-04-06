import React from "react";

const BrandLogoSection = () => {
  const logos = [
    "/about/Logo1.png",
    "/about/Logo2.png",
    "/about/Logo3.png",
    "/about/Logo4.png",
    "/about/Logo5.png",
    "/about/Logo6.png",
    "/about/Logo7.png",
  ];

  return (
    <section className="w-full py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">

        {/* LEFT GRADIENT */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>

        {/* RIGHT GRADIENT */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>

        {/* LOGOS  grayscale hover:grayscale-0*/}
        <div className="flex gap-14 animate-scrollSlow hover:pause-scroll transition-all">  
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="brand"
              className="h-10 md:h-10 object-contain opacity- hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandLogoSection;