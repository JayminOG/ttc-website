import React from "react";
import { HeroSection } from "../../components/UI";
import BottleCoatingsProducts from "../../components/Products/BottleCoatingsProducts";

const BottleCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="BOTTLE COATINGS"
        tag="BOTTLE COATINGS"
        description="Specially developed protective and decorative coatings for stainless steel water bottles, offering excellent adhesion, scratch resistance, and long-lasting color performance."
      />
      <BottleCoatingsProducts/>
    </main>
  );
};

export default BottleCoatings;
