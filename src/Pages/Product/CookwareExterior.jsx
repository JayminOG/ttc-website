import React from "react";
import { HeroSection } from "../../components/UI";
import CookwareExteriorProducts from "../../components/Products/CookwareExteriorProducts";

const CookwareExterior = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="COOKWARE EXTERIOR"
        tag="COOKWARE EXTERIOR"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <CookwareExteriorProducts/>
    </main>
  );
};

export default CookwareExterior;
