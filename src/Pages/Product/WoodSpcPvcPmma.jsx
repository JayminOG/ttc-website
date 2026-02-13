import React from "react";
import { HeroSection } from "../../components/UI";
import WoodSpcPvcPmmaProducts from "../../components/Products/WoodSpcPvcPmmaProducts";

const WoodSpcPvcPmma = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="WOOD/SPC/PVC/PMMA"
        tag="PLASTIC"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <WoodSpcPvcPmmaProducts/>
    </main>
  );
};

export default WoodSpcPvcPmma;
