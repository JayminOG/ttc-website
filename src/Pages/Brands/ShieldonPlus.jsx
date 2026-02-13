import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/shieldonPlus.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const ShieldonPlus = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="The Ultimate 3-Layer Non-Stick Coating Experience"
        tag="SHIELDON™+"
        description="SHIELDON™+ represents the highest standard in non-stick technology, a premium 3-layer system engineered for exceptional performance and long-lasting durability."
      />
      <BrandDetailSection
        heading="SHIELDON™+"
        BrandHeading="The Ultimate 3-Layer Non-Stick Coating Experience"
        description="SHIELDON™+ represents the highest standard in non-stick coating technology with robust nano-metal particle reinforcement, premium 3-layer coating system engineered for exceptional non-stick performance and long-lasting durability. Designed for excellence, this advanced solution sets a new benchmark in cookware performance and making it ideal for premium cookware applications."
        //  description2="Formulated with revolutionary high-performance fluoropolymers, SHIELDON™+ delivers outstanding release properties and exceptional thermal shock resistance, even under extreme cooking temperatures. This ensures consistent performance, safety, and coating integrity over prolonged and intensive use."
        //  description3="Enhanced with robust nano-metal particle reinforcement, SHIELDON™+ creates a tough, resilient surface that offers superior resistance to scratching, abrasion, and wear. The advanced reinforcement technology significantly extends the lifespan of the coating, making it ideal for premium cookware applications."
        benefits={[
          "Remarkable Non-Stick Properties",
          "High-Performance Fluoropolymer System",
          "Nano-Metal Reinforcement",
          "Premium, Long-Lasting Durability",
        ]}
        applications={[
          "Number of Layers - 3 Coat",
          "Material – PTFE",
          "Non-stick effect – 6 star",
          "Abrasion – 20k+",
          "Coatings thickness -",
          "Colors – various colors option available",
          "Substrate – Aluminium - Rolled/Forged/Cast –  Steel",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default ShieldonPlus;
