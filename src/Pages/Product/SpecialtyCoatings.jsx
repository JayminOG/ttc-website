import React from "react";
import { HeroSection } from "../../components/UI";
import SpecialtyCoatingProducts from "../../components/Products/SpecialtyCoatingProducts";

const SpecialtyCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Specialty & Aesthetic Coatings"
        tag="Specialty Coatings"
        description="Where performance meets style. Elevate your product’s appeal with heat-resistant exterior finishes and luxurious soft-touch handle coatings."
      />
      <SpecialtyCoatingProducts/>
    </main>
  );
};

export default SpecialtyCoatings;
