import React from "react";
import { HeroSection } from "../../components/UI";
import HeatCoatingProducts from "../../components/Products/HeatCoatingProducts";

const Bakeware = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Bakeware Coatings"
        tag="Bakeware"
        description="Perfection in every batch. Our coatings ensure flawless release for cakes, breads, and pastries, resisting sugar abrasion and high oven temperatures."
      />
      <HeatCoatingProducts/>
    </main>
  );
};

export default Bakeware;

