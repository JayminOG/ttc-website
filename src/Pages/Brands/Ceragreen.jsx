import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg1 from "../../../public/brands/Ceragreen/Key-Benefits-CERAGREEN-1.png";
import productImg2 from "../../../public/brands/Ceragreen/Key-Benefits-CERAGREEN-2.png";
import productImg3 from "../../../public/brands/Ceragreen/Key-Benefits-CERAGREEN-3.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";
import Logo from "../../../public/about/Logo1.png";
const Heroimg1 = "/brands/Ceragreen/D-Banner-CERAGREEN-1.png";
const Heroimg2 = "/brands/Ceragreen/D-Banner-CERAGREEN-2-1.png";
const Heroimg3 = "/brands/Ceragreen/D-Banner-CERAGREEN-3.png";
const MHeroimg1 = "/brands/Ceragreen/M-Banner-CERAGREEN-1.png";
const MHeroimg2 = "/brands/Ceragreen/M-Banner-CERAGREEN-2-1.png";
const MHeroimg3 = "/brands/Ceragreen/M-Banner-CERAGREEN-3.png";

const Ceragreen = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Next-Gen Ceramic Non-Stick Coatings"
        tag="CERAGREEN™"
        description="CERAGREEN™ combines advanced sol-gel technology with eco-friendly safety, delivering a premium non-stick solution for modern cookware and appliances."
        image={[Heroimg1 , Heroimg2 , Heroimg3]}
        mobileImage={[MHeroimg1 , MHeroimg2 , MHeroimg3]}
      />
      <BrandDetailSection
        heading="CERAGREEN™"
        BrandHeading="Next-Gen Ceramic Non-Stick Coatings"
        logo={Logo}
        description="CERAGREEN™ is a premium ceramic non-stick coating designed for cookware, bakeware, and electrical appliances. Developed using advanced sol-gel technology with nano-particle formation, CERAGREEN™ creates a tough, multi-layer ceramic structure that protects surfaces while delivering next-level non-stick release and long-lasting performance."
        benefits={[
          "Advanced Ceramic Non-Stick Performance",
          "PFAS-Free",
          "Premium, Long-Lasting Durability",
        ]}
        applications={[
          "Number of Layers - 2 Coat",
          "Material – Sol-gel",
          "Non-stick effect – 4 star",
          "Abrasion – 5 star",
          "Coatings thickness - 35-50 µm",
          "Ideal for – Cookware & Electrical appliances",
          "Color – Option available",
          "Substrate - Aluminium - Rolled/Forged/Cast\nStainless Steel"
        ]}
        images={[productImg1, productImg2, productImg3]}
        // logo={protectixLogo}
      />
    </main>
  );
};

export default Ceragreen;
