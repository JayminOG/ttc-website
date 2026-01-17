import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/shieldon.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const Shieldon = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Advanced 3-Layer Non-Stick Coating System"
        tag="SHIELDON™"
        description="SHIELDON™ delivers an exceptional balance of reliable performance, excellent non-stick properties, and long-lasting durability for demanding kitchens."
      />
      <BrandDetailSection
        heading="SHIELDON™"
        BrandHeading="Advanced 3-Layer Non-Stick Coating System"
        description="Designed for demanding cookware applications, SHIELDON™ represents a premium upgrade over standard 2-layer systems, offering enhanced protection and extended service life. Developed with advanced fluoropolymer resin reinforcement, this system features an additional coating layer that significantly improves abrasion resistance, adhesion, and overall durability. This multi-layer structure ensures smoother cooking, consistent food release, and effortless cleaning, even with regular use."
        //  description2="Developed with advanced fluoropolymer resin reinforcement, SHIELDON™ features an additional coating layer that significantly improves abrasion resistance, adhesion, and overall durability. This multi-layer structure ensures smoother cooking, consistent food release, and effortless cleaning even with regular use."
        //  description3="SHIELDON™ 3-Layer Coatings elevate cookware performance by combining advanced material technology with multi-layer protection—delivering a durable, high-quality non-stick solution built to last."
        benefits={[
          "Excellent Non-Stick Performance: Provides smooth, reliable release for superior cooking results.",
          "3-Layer Coating Technology: The extra layer enhances durability and wear resistance compared to two-layer systems.",
          "Enhanced Abrasion Resistance: Designed to withstand repeated cooking cycles while maintaining surface integrity.",
          "Advanced Fluoropolymer Resin System: Ensures long-term performance, heat stability, and coating consistency.",
          "Easy Cleaning Experience: Reduces food residue buildup for convenient maintenance.",
        ]}
        applications={[
          "Rolled / Forged / Cast Aluminium ",
          "Stainless Steel",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default Shieldon;
