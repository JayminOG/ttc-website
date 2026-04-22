import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg1 from "../../../public/brands/SHIELDON/Key-Benefits-SHIELDON-1.png";
import productImg2 from "../../../public/brands/SHIELDON/Key-Benefits-SHIELDON-2.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";
import Logo from "../../../public/about/Logo4.png";
const Heroimg1 = "/brands/SHIELDON/D-Banner-SHIELDON-1-1.png";
const Heroimg2 = "/brands/SHIELDON/D-Banner-SHIELDON-2-1.png";
const MHeroimg1 = "/brands/SHIELDON/M-Banner-SHIELDON-1-1.png";
const MHeroimg2 = "/brands/SHIELDON/M-Banner-SHIELDON-2-1.png";

const Shieldon = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="3-Layer Ultimate Non-stick Coatings"
        tag="SHIELDON™"
        description="SHIELDON™ delivers an exceptional balance of reliable performance, excellent non-stick properties, and long-lasting durability for demanding kitchens."
        image={[Heroimg1 , Heroimg2]}
        mobileImage={[MHeroimg1 , MHeroimg2]}
      />
      <BrandDetailSection
        heading="SHIELDON™"
        BrandHeading="3-Layer Ultimate Non-stick Coatings"
        logo={Logo}
        description="SHIELDON™ 3-Layer Coatings deliver an exceptional balance of reliable performance, excellent non-stick properties, and long-lasting durability. Designed for demanding cookware applications, SHIELDON™ represents a premium upgrade over a PROTECTIX™+ offering enhanced protection and extended service life."
        //  description2="Developed with advanced fluoropolymer resin reinforcement, SHIELDON™ features an additional coating layer that significantly improves abrasion resistance, adhesion, and overall durability. This multi-layer structure ensures smoother cooking, consistent food release, and effortless cleaning even with regular use."
        //  description3="SHIELDON™ 3-Layer Coatings elevate cookware performance by combining advanced material technology with multi-layer protection—delivering a durable, high-quality non-stick solution built to last."
        benefits={[
          "Exceptional Non-Stick Properties",
          "Enhanced Abrasion Resistance",
          "Advanced Rain forced Fluoropolymer",
          "Smooth Cooking Experience",
        ]}
        applications={[
          "Number of Layers - 3 Coat",
          "Material – PTFE",
          "Non-stick effect – 5 star",
          "Abrasion – 5 star",
          "Coatings thickness - 35-50 µm",
          "Ideal for – Cookware, Bakeware, Electrical appliances ",
          "Colors – Options available",
          "Substrate - Aluminium - Rolled/Forged/Cast\nStainless Steel\nMS"
        ]}
        images={[productImg1, productImg2]}
        // logo={protectixLogo}
      />
    </main>
  );
};

export default Shieldon;
