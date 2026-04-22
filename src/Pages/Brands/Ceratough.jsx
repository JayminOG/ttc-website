import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg1 from "../../../public/brands/Ceratough/Key-Benefits-CERATOUGH-1.png";
import productImg2 from "../../../public/brands/Ceratough/Key-Benefits-CERATOUGH-2.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";
import Logo from "../../../public/about/Logo6.png";
const Heroimg1 = "/brands/Ceratough/D-Banner-CERATOUGH-3.png";
const Heroimg2 = "/brands/Ceratough/D-Banner-CERATOUGH-4.png";
const MHeroimg1 = "/brands/Ceratough/M-Banner-CERATOUGH-3.png";
const MHeroimg2 = "/brands/Ceratough/M-Banner-CERATOUGH-4.png";

const ceratough = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Re-invented Ceramic Coatings"
        tag="CERATOUGH™"
        description="CERATOUGH™ represents the next evolution beyond CERAGREEN™—an ultra-premium ceramic non-stick coating engineered for extreme durability, superior abrasion resistance, and long-lasting non-stick performance. Developed using advanced Nano Sol-Gel Reinforced Technology, CERATOUGH™ delivers exceptional surface strength while maintaining smooth, consistent food release."
        image={[Heroimg1 , Heroimg2]}
        mobileImage={[MHeroimg1 , MHeroimg2]}
      />
      <BrandDetailSection
        heading="CERATOUGH™"
        BrandHeading="Re-invented Ceramic Coatings"
        logo={Logo}
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
          "Number of Layers - 2 Coat",
          "Material – Sol-gel",
          "Non-stick effect – 4 star",
          "Abrasion – 5 star",
          "Coatings thickness - 35-50 µm",
          "Ideal for – Cookware, Bakeware & Electrical appliances", 
          "Colors – Option available",
          "Substrate - Aluminium - Rolled/Forged/Cast\nStainless Steel"
        ]}
        images={[productImg1, productImg2]}
        // logo={protectixLogo}
      />
    </main>
  );
};

export default ceratough;
