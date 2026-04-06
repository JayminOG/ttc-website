import React from "react";
import { HeroSection } from "../../components/UI";
import PlasticProducts from "../../components/Products/PlasticProducts";
const Heroimg = "/products/Plastic1.png";

const Plastic = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="UV & LED Curable Topcoats"
        tag="PLASTIC"
        // description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
        image={Heroimg}
      />
      <PlasticProducts/>
    </main>
  );
};

export default Plastic;
