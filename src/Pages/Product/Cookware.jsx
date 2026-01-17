import React from "react";
import { HeroSection } from "../../components/UI";
import CoatingSection from "../../components/Products/CoatingSection";

const Cookware = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Cookware Coatings"
        tag="Cookware"
        description="Advanced surface technologies engineered for the modern kitchen. From daily essentials to professional-grade tools, we deliver the perfect finish."
      />
      <CoatingSection/>
    </main>
  );
};

export default Cookware;
