import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/ceragreen.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const Ceragreen = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Next-Gen Ceramic Non-Stick Coatings"
        tag="CERAGREEN"
        description="CERAGREEN™ combines advanced sol-gel technology with eco-friendly safety, delivering a premium non-stick solution for modern cookware and appliances."
      />
      <BrandDetailSection
        heading="CERAGREEN"
        BrandHeading="Next-Gen Ceramic Non-Stick Coatings"
        description="Developed using advanced sol-gel technology with nano-particle formation, CERAGREEN™ creates a tough, multi-layer ceramic structure that protects surfaces while delivering next-level non-stick release. The nano-ceramic matrix forms a highly durable and heat-resistant coating, ensuring excellent surface protection and effortless cleaning. Uniquely, CERAGREEN™ is completely PFAS-free and non-toxic, making it a safe, environmentally responsible choice that meets modern health and sustainability standards."
        benefits={[
          "Advanced Ceramic Non-Stick Performance: Superior food release with smooth cooking and easy cleanup.",
          "Sol-Gel Nano-Particle Technology: Creates tough, protective layers for extended coating life.",
          "PFAS-Free & Non-Toxic: Safe for food contact and eco-friendly manufacturing.",
          "High Thermal & Wear Resistance: Performs reliably under high temperatures and heavy use.",
          "Premium Surface Protection: Enhances durability while maintaining non-stick efficiency.",
        ]}
        applications={[
          "High-end Cookware",
          "Bakeware Products",
          "Premium Electrical Appliances",
        ]}
        image={productImg}
        logo={protectixLogo}
      />
    </main>
  );
};

export default Ceragreen;
