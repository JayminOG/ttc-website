import React from "react";
import { HeroSection } from "../../components/UI";
import MetalProducts from "../../components/Products/MetalProducts";

const Metal = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="UV CURABLE METAL PAINT"
        tag="Metal"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <MetalProducts/>
    </main>
  );
};

export default Metal;
