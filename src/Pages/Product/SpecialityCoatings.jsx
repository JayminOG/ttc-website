import React from "react";
import { HeroSection } from "../../components/UI";
import SpecialityCoatingsProducts from "../../components/Products/SpecialityCoatingsProducts";

const SpecialityCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="ANTI-FINGERPRINT COATINGS FOR METAL & PLASTIC"
        tag="SPECIALITY COATINGS"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <SpecialityCoatingsProducts/>
    </main>
  );
};

export default SpecialityCoatings;
