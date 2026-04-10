import React from "react";
import { HeroSection } from "../../components/UI";
import SpecialityCoatingsProducts from "../../components/Products/SpecialityCoatingsProducts";
const Heroimg = "/products/D-Speciality-Coatings.png";
const MHeroimg = "/products/M-Speciality-Coatings.png";

const SpecialityCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="SPECIALITY COATINGS"
        tag="SPECIALITY COATINGS"
        // description="Engineering reliability for the modern home. From rice cookers to sandwich makers, our coatings ensure consistent heat transfer and effortless release."
        image={Heroimg}
        mobileImage={MHeroimg}
      />
      <SpecialityCoatingsProducts/>
    </main>
  );
};

export default SpecialityCoatings;
