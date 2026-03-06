import React from "react";
import { HeroSection } from "../../components/UI";
import CookwareExteriorProducts from "../../components/Products/CookwareExteriorProducts";

const CookwareExterior = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="COOKWARE EXTERIOR"
        tag="COOKWARE EXTERIOR"
        description="High-performance protective coatings for the outer surface of cookware, providing excellent heat resistance, scratch durability, color stability, and an attractive long-lasting finish."
      />
      <CookwareExteriorProducts/>
    </main>
  );
};

export default CookwareExterior;
