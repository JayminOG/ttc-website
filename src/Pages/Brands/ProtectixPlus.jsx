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
      description="PROTECTIX™+ 2-Layers offers the perfect balance of excellent non-stick performance, abrasion resistance, and long-lasting durability. Designed to exceed expectations, this advanced coating system enhances cookware performance while maintaining superior surface integrity over time."
    //  description2="Built on advanced fluoropolymer technology, PROTECTIX™+ delivers exceptional release properties combined with outstanding wear resistance, ensuring reliable performance even under regular use. Its robust formulation makes it an ideal choice for manufacturers seeking premium quality beyond entry-level solutions."
    //  description3="PROTECTIX™+ enables manufacturers to achieve good-quality non-stick finishes while maintaining cost competitiveness—making it a trusted solution for everyday cookware applications."
      benefits={[
        "Excellent Non-Stick Properties",
        "High Abrasion Resistance",
        "Superior Durability",
        "Advanced Fluoropolymer Technology",
        "Value-Driven Premium Quality",
      ]}
      applications={[
        "Number of Layers - 2 Coat",
        "Material – PTFE",
        "Non-stick effect – 4.5 star",
        "Abrasion – 10k+",
        "Coatings thickness - ",
        "Colors – various colors option available",
        "Substrate – Aluminium - Rolled/Forged/Cast - Steel",
      ]}
      image={productImg}
      logo={protectixLogo}
    />
    </main>
  );
};

export default ProtectixPlus;
