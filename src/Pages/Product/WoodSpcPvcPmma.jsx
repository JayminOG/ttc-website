import React from "react";
import { HeroSection } from "../../components/UI";
import WoodSpcPvcPmmaProducts from "../../components/Products/WoodSpcPvcPmmaProducts";
const Heroimg = "/products/Wood _ SPC _ PVC _ PMMA.png";

const WoodSpcPvcPmma = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="WOOD/SPC/PVC/PMMA"
        tag="PLASTIC"
        // description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
        image={Heroimg}
      />
      <WoodSpcPvcPmmaProducts/>
    </main>
  );
};

export default WoodSpcPvcPmma;
