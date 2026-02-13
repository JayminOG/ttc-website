import React from "react";
import { HeroSection } from "../../components/UI";
import BottleCoatingsProducts from "../../components/Products/BottleCoatingsProducts";

const BottleCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="SS WATER BOTTLE COATINGS"
        tag="BOTTLE COATINGS"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <BottleCoatingsProducts/>
    </main>
  );
};

export default BottleCoatings;
