import React from "react";
import { HeroSection } from "../../components/UI";
import IndustrialCoatingProducts from "../../components/Products/IndustrialCoatingProducts";

const IndustrialCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Industrial Performance Coatings"
        tag="Industrial Coatings"
        description="Deep expertise in PTFE, Silicone, and Sol-Gel technologies. We deliver reliable protection, low friction, and durability for the most demanding environments."
      />
      <IndustrialCoatingProducts />
    </main>
  );
};

export default IndustrialCoatings;
