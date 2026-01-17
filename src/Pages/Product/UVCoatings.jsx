import React from "react";
import { HeroSection } from "../../components/UI";
import UVCoatingproducts from "../../components/Products/UVCoatingproducts";

const UVCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="NextG-UV Surface Protection"
        tag="UV Coatings"
        description="Next-generation UV/LED curable coatings engineered for speed and precision. Experience premium finishes for wood, plastic, and metal with instant curing technology."
      />
      <UVCoatingproducts />
    </main>
  );
};

export default UVCoatings;
