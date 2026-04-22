import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg1 from "../../../public/brands/SHIELDON+/Key-Benefits-Shieldon+-1.png";
import productImg2 from "../../../public/brands/SHIELDON+/Key-Benefits-Shieldon+-2.png";
import productImg3 from "../../../public/brands/SHIELDON+/Key-Benefits-Shieldon+-3.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";
import Logo from "../../../public/about/Logo5.png";
const Heroimg = "/brands/Shieldon+.png";
const Heroimg1 = "/brands/SHIELDON+/D-Banner-SHIELDON+1.png";
const Heroimg2 = "/brands/SHIELDON+/D-Banner-SHIELDON+2.png";
const Heroimg3 = "/brands/SHIELDON+/D-Banner-SHIELDON+3.png";
const MHeroimg1 = "/brands/SHIELDON+/M-Banner-SHIELDON+1.png";
const MHeroimg2 = "/brands/SHIELDON+/M-Banner-SHIELDON+2.png";
const MHeroimg3 = "/brands/SHIELDON+/M-Banner-SHIELDON+3.png";

const ShieldonPlus = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="3-Layer Premium Non-stick Coatings"
        tag="SHIELDON™+"
        description="SHIELDON™+ represents the highest standard in non-stick technology, a premium 3-layer system engineered for exceptional performance and long-lasting durability."
        image={[Heroimg3, Heroimg1]}
        mobileImage={[MHeroimg3 , MHeroimg1]}
      />
      <BrandDetailSection
        heading="SHIELDON™+"
        BrandHeading="3-Layer Premium Non-stick Coatings"
        logo={Logo}
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
          "Non-stick effect – 5 star",
          "Abrasion – 5 star",
          "Coatings thickness - 35-50 µm",
          "Ideal for – Cookware, Bakeware, Electrical appliances",
          "Colors – Options available ",
          "Substrate - Aluminium - Rolled/Forged/Cast\nStainless Steel\nMS"
        ]}
        images={[productImg1, productImg2]}
        // logo={protectixLogo}
      />
    </main>
  );
};

export default ShieldonPlus;
