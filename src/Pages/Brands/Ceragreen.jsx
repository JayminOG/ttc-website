import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/ceragreen.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const Ceragreen = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Next-Gen Ceramic Non-Stick Coatings"
        tag="CERAGREEN"
        description="CERAGREEN™ combines advanced sol-gel technology with eco-friendly safety, delivering a premium non-stick solution for modern cookware and appliances."
      />
      <BrandDetailSection
        heading="CERAGREEN"
        BrandHeading="Next-Gen Ceramic Non-Stick Coatings"
        description="CERAGREEN™ is a premium ceramic non-stick coating designed for cookware, bakeware, and electrical appliances. Developed using advanced sol-gel technology with nano-particle formation, CERAGREEN™ creates a tough, multi-layer ceramic structure that protects surfaces while delivering next-level non-stick release and long-lasting performance."
        benefits={[
          "Advanced Ceramic Non-Stick Performance",
          "PFAS-Free & Non-Toxic",
          "Premium, Long-Lasting Durability",
        ]}
        applications={[
          "Material – Ceramic Sol-gel",
          "Non-stick effect – 3 star",
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

export default Ceragreen;
