import React from "react";
import { HeroSection } from "../../components/UI";
import SoftTouchCoatingsProducts from "../../components/Products/SoftTouchCoatingsProducts";

const SoftTouchCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="SOFT TOUCH COATINGS"
        tag="SOFT TOUCH COATINGS"
        description="Premium velvety finish coating designed for all kind of plastic surfaces and metal surfaces, offering enhanced grip, velvet feel, scratch resistance."
      />
      <SoftTouchCoatingsProducts/>
    </main>
  );
};

export default SoftTouchCoatings;
