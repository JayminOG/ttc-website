import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/protectixPlus.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const ProtectixPlus = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Enhanced Performance. Proven Durability."
        tag="PROTECTIX™+"
        description="PROTECTIX™+ offers the perfect balance of excellent non-stick performance, abrasion resistance, and long-lasting durability."
      />
      <BrandDetailSection
      heading="PROTECTIX™ +"
      BrandHeading="2-Layers Enhanced Performance. Proven Durability."
      description="Designed to exceed expectations, this advanced coating system enhances cookware performance while maintaining superior surface integrity over time. Built on advanced fluoropolymer technology, PROTECTIX™+ delivers exceptional release properties combined with outstanding wear resistance, ensuring reliable performance even under regular use."
    //  description2="Built on advanced fluoropolymer technology, PROTECTIX™+ delivers exceptional release properties combined with outstanding wear resistance, ensuring reliable performance even under regular use. Its robust formulation makes it an ideal choice for manufacturers seeking premium quality beyond entry-level solutions."
    //  description3="PROTECTIX™+ enables manufacturers to achieve good-quality non-stick finishes while maintaining cost competitiveness—making it a trusted solution for everyday cookware applications."
      benefits={[
        "Excellent Non-Stick Properties: Smooth and consistent food release for superior cooking performance.",
        "High Abrasion Resistance: Enhanced resistance to wear, extending product life and maintaining surface quality.",
        "Superior Durability: Engineered to withstand repeated use while retaining non-stick effectiveness. ",
        "Advanced Fluoropolymer Technology: Delivers a premium balance of maximum non-stick release performance and reliability.",
        "Value-Driven Premium Quality: Offers higher performance compared to standard 2-Layers systems, while remaining cost-effective.",
      ]}
      applications={[
        "Rolled / Forged / Cast Aluminium",
        "Stainless Steel",
      ]}
      image={productImg}
      logo={protectixLogo}
    />
    </main>
  );
};

export default ProtectixPlus;
