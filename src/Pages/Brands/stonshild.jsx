import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/stonshild.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const stonshild = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Advanced 3-Layer Non-Stick Coating System"
        tag="STONSHILD™"
        description="STONSHILD™ delivers an exceptional balance of reliable performance, excellent non-stick properties, and long-lasting durability for demanding kitchens."
      />
      <BrandDetailSection
        heading="STONSHILD™"
        BrandHeading="Advanced 3-Layer Non-Stick Coating System"
        description="STONSHILD™ is advanced roller based non-stick coating for interior and exterior cookware. Engineered to outperform conventional systems, it delivers exceptional durability, good abrasion resistance, and long-lasting non-stick performance—even under demanding cooking conditions.
Built on advanced multi-pass roller coating technology, STONSHILD™ ensures precise micron-level film control, uniform coverage, and consistent surface quality. "
        //  description2="Developed with advanced fluoropolymer resin reinforcement, SHIELDON™ features an additional coating layer that significantly improves abrasion resistance, adhesion, and overall durability. This multi-layer structure ensures smoother cooking, consistent food release, and effortless cleaning even with regular use."
        //  description3="SHIELDON™ 3-Layer Coatings elevate cookware performance by combining advanced material technology with multi-layer protection—delivering a durable, high-quality non-stick solution built to last."
        benefits={[
          "Precision micron-level coating control",
          "Optimized for roller coating production lines",
          "Uniform, defect-free surface finish",
          "Wide colour & decorative customization options",
          "Premium, Long-Lasting Durability",
        ]}
        applications={[
          "Material – PTFE/Silicon",
          "Non-stick effect – 5 star",
          "Abrasion – 05k+",
          "Coatings thickness -",
          "Colors – various colors option available",
          "Substrate – Aluminium - Rolled",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default stonshild;
