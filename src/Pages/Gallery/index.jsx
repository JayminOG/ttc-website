import React from "react";
import { HeroSection } from "../../components/UI";
import { Gallery } from "../../components/Gallery";

const GalleryPage = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Innovations In Surface Technology"
        tag="Gallery"
        description="Seeing is believing. Explore our portfolio of excellence, from the sleek, non-stick finish of premium cookware to the rugged durability of industrial machinery. Witness how our advanced coatings transform raw surfaces into high-performance products."
      />
      <div className="container">
        <Gallery />

      </div>
    </main>
  );
};

export default GalleryPage;
