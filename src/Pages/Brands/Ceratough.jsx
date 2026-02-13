import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/ceratough.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const ceratough = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Advanced 3-Layer Non-Stick Coating System"
        tag="CERATOUGH™"
        description="CERATOUGH™ represents the next evolution beyond CERAGREEN™—an ultra-premium ceramic non-stick coating engineered for extreme durability, superior abrasion resistance, and long-lasting non-stick performance. Developed using advanced Nano Sol-Gel Reinforced Technology, CERATOUGH™ delivers exceptional surface strength while maintaining smooth, consistent food release."
      />
      <BrandDetailSection
        heading="CERATOUGH™"
        BrandHeading="Advanced 3-Layer Non-Stick Coating System"
        description="CERATOUGH™ represents the next evolution beyond CERAGREEN™—an ultra-premium ceramic non-stick coating engineered for extreme durability, superior abrasion resistance, and long-lasting non-stick performance. Developed using advanced Nano Sol-Gel Reinforced Technology, CERATOUGH™ delivers exceptional surface strength while maintaining smooth, consistent food release."
        //  description2="Developed with advanced fluoropolymer resin reinforcement, SHIELDON™ features an additional coating layer that significantly improves abrasion resistance, adhesion, and overall durability. This multi-layer structure ensures smoother cooking, consistent food release, and effortless cleaning even with regular use."
        //  description3="SHIELDON™ 3-Layer Coatings elevate cookware performance by combining advanced material technology with multi-layer protection—delivering a durable, high-quality non-stick solution built to last."
        benefits={[
          "Reinforced Nano-Ceramic Structure",
          "Superior Non-stick release",
          "Excellent abrasion resistance",
          "PFAS-Free & Non-Toxic",
          "Premium, Long-Lasting Durability",
        ]}
        applications={[
          "Material – Ceramic Sol-gel",
          "Non-stick effect – 4 star",
          "Abrasion – 05k+",
          "Coatings thickness -",
          "Colors – various colors option available",
          "Substrate – Aluminium – Rolled/Forged/Cast – Stainless Steel",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default ceratough;
