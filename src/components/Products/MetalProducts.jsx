import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const MetalProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "UV CURABLE METAL PAINT ",
      description: (
        <>
          TTC has developed next-generation UV-curable paint systems using current-era advanced coating technology. These high-performance coatings are engineered specifically for metal substrates, offering exceptional aesthetics, durability, and ultra-fast curing. Our UV coating range includes multi-shade base coats paired with metallic, high-gloss, and matt topcoats. Beyond speed, TTC’s UV-curable coatings enhance surface hardness, superior gloss levels, improved scratch resistance, and long-lasting anti-corrosive protection. The result is a flawless, high-end finish with outstanding performance and reduced production time.
          <br />
          <br />
          Key Benefits:
          <br />
          · Ultra-fast UV curing in minutes
          <br />
          · Compatible with all major metal surfaces
          <br />
          · High gloss, metallic & matt finish options
          <br />
          · Excellent hardness & scratch resistance
          <br />
          · Efficient alternative to conventional curing system
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
          heading="METAL"
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

export default MetalProducts;
