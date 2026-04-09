import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
const productImg = "/brands/PROTECTIX2.png";
const protectixLogo = "/brands/protectixLogo.png";
const Heroimg = "/brands/protectix1.png";

const Protectix = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="2-Layer Ultimate Non-stick Coatings"
        tag="PROTECTIX™"
        description="Engineered for value-driven applications, PROTECTIX™ offers an ideal balance between performance, durability, and cost efficiency."
        image={Heroimg}
        // videoUrls={["https://www.youtube.com/embed/Vn-daczc2Ko"]}
      />
      <BrandDetailSection
        heading="PROTECTIX™"
        BrandHeading="2-Layer Ultimate Non-stick Coatings"
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
        images ={[productImg]}
        // logo={protectixLogo}
      />
    </main>
  );
};

export default Protectix;
