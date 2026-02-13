import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const BottleCoatingsProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "SOFT TOUCH COATINGS",
      description: (
        <>
          TTC offers premium 1K metal coatings formulated with a customized hybrid resin system that combines advanced polyurethane and acrylic technologies. This innovative chemistry delivers excellent flexibility, long-lasting durability, and superior resistance to wear and tear.
          <br />
          <br />
          Designed to enhance both performance and appearance, TTC’s metal coatings are available in a wide range of metallic and dye-based transparent colours, delivering a high-end aesthetic finish. All TTC coatings are compliant with FDA and RoHS international safety standards, ensuring safe, reliable, and sustainable use across global markets.
          <br />
          <br />
          Specially recommended for Stainless steel - water bottle, tea kettle and household serving wear or appliances.
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="SS WATER BOTTLE COATINGS"
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

export default BottleCoatingsProducts;
