import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/protectix.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const Protectix = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Reliable 2-Layers Non-Stick Coating Solutions"
        tag="Protectix"
        description="Engineered for value-driven applications, PROTECTIX™ offers an ideal balance between performance, durability, and cost efficiency."
      />
      <BrandDetailSection
        heading="PROTECTIX™"
        BrandHeading="Reliable 2-Layers Non-Stick Coating Solutions"
        description="PROTECTIX™ is a 2-layers non-stick coating system designed to deliver excellent performance at an affordable cost, without compromising on quality or reliability. PROTECTIX™ offers an ideal balance between performance, durability, and cost efficiency."
        benefits={[
          "Outstanding Non-Stick Performance",
          "Cost-Effective Solution",
          "Two-Layer Coating Technology",
          "Ideal for Entry-Level Cookware",
          "Consistent Quality Finish",
        ]}
        applications={[
          "Number of Layers - 2 Coat",
          "Material – PTFE",
          "Non-stick effect – 4 star",
          "Abrasion – 05k+",
          "Coatings thickness - ",
          "Colors – Black",
          "Substrate – Aluminium - Rolled/Forged/Cast",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default Protectix;
