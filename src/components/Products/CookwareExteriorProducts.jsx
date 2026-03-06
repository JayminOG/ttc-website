import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const CookwareExteriorProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "COOKWARE EXTERIOR",
      description: (
        <>
          TTC’s advanced cutting-edge technology to develop exterior coatings that represent the highest standards of innovation. Engineered to withstand extreme cooking temperatures, these coatings deliver exceptional durability, heat resistance, and long-term performance.
          <br />
          <br />
          Offered in an extensive range of colours, textures, and special effects, TTC’s exterior coatings go beyond protection—enhancing the visual appeal of cookware with a refined, premium finish. The result is a perfect balance of performance and aesthetics, designed to elevate cookware quality and brand value.
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
    benefits: [
        "High heat and scratch resistance",
        "Strong adhesion on aluminum and stainless steel",
        "Good chemical and detergent resistance",
        "Superior color retention and gloss stability",
        "Smooth, uniform finish",
        "Available in matte, semi-gloss, and high-gloss options",
        "Suitable for spray or roller application"
      ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="COOKWARE EXTERIOR(HTR) COATINGS"
          align="center"
          text="text-black"
        />
      </div>

      {data.map((item, index) => (
        <CoatingCard key={index} {...item} />
      ))}
    </section>
  );
};

export default CookwareExteriorProducts;
