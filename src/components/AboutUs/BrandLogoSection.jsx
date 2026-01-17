import React from "react";

// BRAND LOGOS
import BrandLogo1 from "../../../public/about/BrandLogo1.png";
import BrandLogo2 from "../../../public/about/BrandLogo2.png";
import BrandLogo3 from "../../../public/about/BrandLogo3.png";
import BrandLogo4 from "../../../public/about/BrandLogo4.png";
import BrandLogo5 from "../../../public/about/BrandLogo5.png";
import BrandLogo6 from "../../../public/about/BrandLogo6.png";
import BrandLogo7 from "../../../public/about/BrandLogo1.png";
import BrandLogo8 from "../../../public/about/BrandLogo2.png";

const BrandLogoSection = () => {
  const logos = [
    BrandLogo1, BrandLogo2, BrandLogo3, BrandLogo4,
    BrandLogo5, BrandLogo6, BrandLogo7, BrandLogo8
  ];

  return (
    <section className="w-full py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">

        {/* GRADIENT BLUR LEFT */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>

        {/* GRADIENT BLUR RIGHT */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>

        {/* SCROLLING LOGOS */}
        <div className="flex gap-14 animate-scrollSlow hover:pause-scroll grayscale hover:grayscale-0 transition-all">
          {[...logos, ...logos].map((logo, i) => (
            <img 
              key={i}
              src={logo}
              alt="brand"
              className="h-10 md:h-10 object-contain opacity-60 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandLogoSection;
