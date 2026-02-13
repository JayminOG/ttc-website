import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/protectixPlus.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const PfaPowder = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Enhanced Performance. Proven Durability."
        tag="PFA POWDER"
        description="TTC’s industrial-grade bakeware coating systems are engineered to deliver long-lasting non-stick release even under rough handling and demanding production conditions. Designed for commercial and industrial baking applications, the system uses a reinforced liquid primer that chemically crosslinks with high-performance PFA powder topcoats, creating a strong, wear-resistant coating structure."
      />
      <BrandDetailSection
      heading="PFA POWDER"
      BrandHeading=""
      description="TTC’s industrial-grade bakeware coating systems are engineered to deliver long-lasting non-stick release even under rough handling and demanding production conditions. Designed for commercial and industrial baking applications, the system uses a reinforced liquid primer that chemically crosslinks with high-performance PFA powder topcoats, creating a strong, wear-resistant coating structure."
    //  description2="Built on advanced fluoropolymer technology, PROTECTIX™+ delivers exceptional release properties combined with outstanding wear resistance, ensuring reliable performance even under regular use. Its robust formulation makes it an ideal choice for manufacturers seeking premium quality beyond entry-level solutions."
    //  description3="PROTECTIX™+ enables manufacturers to achieve good-quality non-stick finishes while maintaining cost competitiveness—making it a trusted solution for everyday cookware applications."
      benefits={[
        "Long-Lasting Non-Stick Release",
        "Excellent Durability & Extended Coating Life",
        "Uniform Baking & Easy Cleaning",
        "Ideal for Houseware Bakeware",
      ]}
      applications={[
        "Material – PFA",
        "Non-stick effect – 5 star",
        "Coatings thickness - ",
        "Colors – Black, Gray & Green",
        "Substrate – Sheet metal",
      ]}
      image={productImg}
      logo={protectixLogo}
    />
    </main>
  );
};

export default PfaPowder;
