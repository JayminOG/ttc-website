import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/protectix.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const Protectixone = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Reliable 1-Layers Non-Stick Coating Solutions"
        tag="Protectix"
        description="PROTECTIX™ is a 1-layer non-stick coating system developed specifically for daily home use bakeware applications. Based on advanced silicone–polyester coating technology, it delivers excellent non-stick release, making it ideal for baking molds for cookies, bread, cakes, muffins, and desserts."
      />
      <BrandDetailSection
        heading="PROTECTIX™"
        BrandHeading="Reliable 1-Layers Non-Stick Coating Solutions"
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
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default Protectixone;
