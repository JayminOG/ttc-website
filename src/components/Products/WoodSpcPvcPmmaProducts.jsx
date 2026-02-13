import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const WoodSpcPvcPmmaProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "UV Curable Coatings for wood surfaces",
      description: (
        <>
          TTC produce pre-finished wood UV coatings using eco-friendly, VOC-free, radiation-curing coating systems. Over 90% of our surfaces are finished with UV-curing technology, We also lead with energy-efficient LED-UV technology for sustainable production. 
          <br />
          <br />
          Each wood product features a multilayer coating structure — UV Primer, UV Putty, UV Sealer, and UV Topcoat — each layer engineered for specific performance benefits like adhesion, abrasion resistance, and scratch protection. TTC UV coatings delivers customized durability, beauty, and long-lasting value.
          <br />
          <br />
          Surfaces : Veneer, Hardwood, Mica & Practical board, plywood and MDF/HDMR board 
          <br />
          Preferred Application Process : Spray, Roller & Curtain
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: false,
    },
    {
      number: 2,
      image: img1,
      title: "UV Curable Coatings for Floorings",
      description: (
        <>
          WOODEN FLOORINGS : UV coated wood flooring means the wood has a finish that's been cured by UV light. It's not just a surface coat — it's a super-durable, scratch-resistant finish that’s dried instantly by UV lamps instead of air-drying like traditional finishes.
          <br />
          <br />
          Surfaces : Veneer & Hard wood
          <br />
          Preferred Application Process : Roller & Spray  
          <br />
          <br />
          SPC FLOORINGS : UV coating protects the flooring from damage caused by UV rays, prevents fading, and enhances its scratch and stain resistance. This coating is applied to the surface of the SPC flooring or vinyl to create a protective layer. 
          <br />
          Surfaces : SPC & LVT
          <br />
          Preferred Application Process : Roller 
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: true,
    },
    {
      number: 3,
      image: img1,
      title: "UV Curable Coatings for Floorings",
      description: (
        <>
          UV curable coatings as topcoats for acrylic sheets or PC/PMMA/PETG, available in super glossy and matt finishes. The additional layer helps to improve the quality of your product by enhancing anti-scratch resistance, mark resistance, abrasion resistance, color stability, and stain resistance.
          <br />
          <br />
          Preferred Application Process : Roller & Flow 
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
          heading="WOOD/SPC/PVC/PMMA"
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

export default WoodSpcPvcPmmaProducts;
