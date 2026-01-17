import React from "react";
import { HeroSection } from "../../components/UI";
import ElectricalCoatingProducts from "../../components/Products/ElectricalCoatingProducts";

const ElectricalAppliance = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Electrical Appliance Coatings"
        tag="Electrical Appliance"
        description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
      />
      <ElectricalCoatingProducts/>
    </main>
  );
};

export default ElectricalAppliance;
