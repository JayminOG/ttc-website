import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg1 from "../../../public/brands/Protectix-1-Layer/Key-Benefits-PROTECTIX-L1-1.png";
import productImg2 from "../../../public/brands/Protectix-1-Layer/Key-Benefits-PROTECTIX-L1-2.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";
const Heroimg1 = "/brands/Protectix-1-Layer/D-Banner-PROTECTIX-L1-1.png";
const Heroimg2 = "/brands/Protectix-1-Layer/D-Banner-PROTECTIX-L1-3.png";
const MHeroimg1 = "/brands/Protectix-1-Layer/M-Banner-PROTECTIX-L1-1.png";
const MHeroimg2 = "/brands/Protectix-1-Layer/M-Banner-PROTECTIX-L1-3.png";

const Protectixone = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="1-Layer Non-stick Coatings"
        tag="PROTECTIX™"
        description="PROTECTIX™ is a 1-layer non-stick coating system developed specifically for daily home use bakeware applications. Based on advanced silicone–polyester coating technology, it delivers excellent non-stick release, making it ideal for baking molds for cookies, bread, cakes, muffins, and desserts."
        image={[Heroimg1 , Heroimg2]}
        mobileImage={[MHeroimg1 , MHeroimg2]}
      />
      <BrandDetailSection
        heading="PROTECTIX™"
        BrandHeading="1-Layer Non-stick Coatings"
        description="PROTECTIX™ is a 1-layer non-stick coating system developed specifically for daily home use bakeware applications. Based on advanced silicone–polyester coating technology, it delivers excellent non-stick release, making it ideal for baking molds for cookies, bread, cakes, muffins, and desserts."
        benefits={[
          "Excellent Non-Stick Release",
          "Easy to Clean",
          "Cost-Effective Coating Solution",
          "Ideal for Houseware Bakeware",
        ]}
        applications={[
          "Material – Silicon Polyester",
          "Non-stick effect – 4 star",
          "Coatings thickness - ",
          "Colors – Various colors option available",
          "Substrate – Sheet metal",
        ]}
        images={[productImg1, productImg2]}
        // logo={protectixLogo}
      />
    </main>
  );
};

export default Protectixone;
