import React from "react";
import { HeroSection } from "../../components/UI";
import SoftTouchCoatingsProducts from "../../components/Products/SoftTouchCoatingsProducts";

const SoftTouchCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="SOFT TOUCH COATINGS"
        tag="SOFT TOUCH COATINGS"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <SoftTouchCoatingsProducts/>
    </main>
  );
};

export default SoftTouchCoatings;
