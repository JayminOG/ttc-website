import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg1 from "../../../public/brands/Protextix+/Key-Benefits-Protectix+-1.png";
import productImg2 from "../../../public/brands/Protextix+/Key-Benefits-Protectix+-2.png";
import productImg3 from "../../../public/brands/Protextix+/Key-Benefits-Protectix+-3.png";
import productImg4 from "../../../public/brands/Protextix+/Key-Benefits-Protectix+-4.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";
const Heroimg1 = "/brands/Protextix+/D-Banner-Protectix+-1.png";
const Heroimg2 = "/brands/Protextix+/D-Banner-Protectix+-2.png";
const Heroimg3 = "/brands/Protextix+/D-Banner-Protectix+-3.png";
const Heroimg4 = "/brands/Protextix+/D-Banner-Protectix+-4.png";
const MHeroimg1 = "/brands/Protextix+/M-Banner-Protectix+-1.png";
const MHeroimg2 = "/brands/Protextix+/M-Banner-Protectix+-2.png";
const MHeroimg3 = "/brands/Protextix+/M-Banner-Protectix+-3.png";
const MHeroimg4 = "/brands/Protextix+/M-Banner-Protectix+-4.png";

const ProtectixPlus = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="2-Layer Premium Non-stick Coatings"
        tag="PROTECTIX™+"
        description="PROTECTIX™+ offers the perfect balance of excellent non-stick performance, abrasion resistance, and long-lasting durability."
        image={[Heroimg1 , Heroimg2 , Heroimg3 , Heroimg4]}
        mobileImage={[MHeroimg1 , MHeroimg2 , MHeroimg3 , MHeroimg4]}
      />
      <BrandDetailSection
      heading="PROTECTIX™ +"
      BrandHeading="2-Layer Premium Non-stick Coatings"
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
      images={[productImg1, productImg3, productImg4]}
      // logo={protectixLogo}
    />
    </main>
  );
};

export default ProtectixPlus;
