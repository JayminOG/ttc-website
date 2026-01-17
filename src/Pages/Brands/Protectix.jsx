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
        description="PROTECTIX™ is a specialized 2-layer non-stick coating system designed to deliver excellent performance at an affordable cost, without compromising on quality or reliability. It is the smart choice for manufacturers seeking dependable coating performance for entry-level and mass-market cookware products."
        benefits={[
          "Outstanding Non-Stick Performance: Provides smooth release and consistent cooking results with very good non-stick properties.",
          "Cost-Effective Solution: Designed to deliver high-quality finishes at an affordable price point, making it perfect for value-conscious markets.",
          "Two-Layer Coating Technology: Ensures enhanced adhesion, improved surface durability, and reliable performance over extended use.",
          "Consistent Quality Finish: Delivers uniform coating appearance and reliable surface protection.",
        ]}
        applications={[
          "Rolled Aluminium",
          "Forged Aluminium",
          "Cast Aluminium",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default Protectix;
