import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const SpecialityCoatingsProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "ANTI-FINGERPRINT COATINGS FOR METAL & PLASTIC",
      description: (
        <>
          TTC’s engineered Anti-Fingerprint Coatings are designed to preserve the original aesthetics of metal and plastic surfaces by effectively eliminating visible fingerprint marks, smudges, and stains. Our advanced formulation creates a protective surface layer that resists fingerprint transfer without altering the look, texture, or finish of the substrate. The surface retains its clean, uniform, and premium appearance, even after frequent handling.
          <br />
          <br />
          Key Benefits:
          <br />
          · No visible fingerprint marks or smudge stains
          <br />
          · Enhances surface aesthetics and premium feel
          <br />
          · High gloss, metallic & matt finish options
          <br />
          · Suitable for metal and plastic substrates as topcoats 
          <br />
          · Houseware and kitchen products
          <br />
          · Consumer electronics & Home electrical appliances
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
      title: "ANTI-FINGERPRINT COATINGS FOR METAL & PLASTIC",
      description: (
        <>
          TTC’s Anti-Graffiti Coatings are engineered to protect metal and plastic surfaces from unwanted stains, markings, paints, inks, and graffiti damage. The advanced protective layer prevents strong adhesion of graffiti materials, allowing stains and marks to be easily removed without damaging the substrate or affecting the original finish. The coating preserves surface aesthetics while significantly reducing maintenance time and cleaning costs. Designed for high-exposure and public-facing applications, TTC anti-graffiti coatings ensure long-lasting cleanliness, durability, and visual consistency, even in harsh environments.
          <br />
          <br />
          Key Benefits:
          <br />
          · Excellent resistance to graffiti, stains, and permanent marks
          <br />
          · Easy removal of paints, inks, and marker stains
          <br />
          · Maintains original appearance, color, and finish
          <br />
          · Reduces cleaning effort and maintenance costs 
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
      title: "PTFE FASTNERS COATINGS",
      description: (
        <>
          TTC offers Fastener Coatings a state-of-the-art range of combination of Fluoropolymer technologies designed to optimize the reliability, efficiency, and durability of fasteners in a wide variety of demanding applications. From land-based structures to offshore rigs, our coatings are engineered to withstand the toughest environments, delivering unparalleled protection against corrosion, chemical attack, and extreme wear resistance.
          <br />
          <br />
          Key Benefits:
          <br />
          · Superior Low Friction & Lubricity
          <br />
          · Excellent corrosion resistance
          <br />
          · Heat Resistance
          <br />
          · Chemical Resistance 
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: false,
    },
    {
      number: 4,
      image: img1,
      title: "ANT-SCALE COATINGS",
      description: (
        <>
          TTC has developed cost-effective, high-performance anti-scale coating solutions specifically engineered for heating elements. These coatings are based on advanced, thermally conductive technologies that help reduce scale formation while maintaining efficient heat transfer. Our engineered formulations deliver enhanced durability, thermal stability, and long-term operational reliability, even under continuous high-temperature and cyclic heating conditions. By minimizing scale buildup, the coatings improve heating efficiency, extend service life, and reduce maintenance requirements.
          <br />
          <br />
          Key Benefits:
          <br />
          · Effective resistance to scale formation on heating elements
          <br />
          · High thermal conductivity for efficient heat transfer
          <br />
          · Excellent durability and thermal stability
          <br />
          · Long-term performance under harsh operating conditions
          <br />
          · Corrosion resistance 
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: true,
    },
    {
      number: 5,
      image: img1,
      title: "PTFE MOLD RELEASE COATINGS",
      description: (
        <>
          PTFE-based mold release coatings are engineered to deliver exceptional non-stick release performance for demanding industrial molding applications. These coatings create a durable, low-surface-energy layer that prevents material adhesion, ensuring smooth demolding and consistent production quality. Designed for high-cycle industrial use, the coatings provide reliable release while reducing mold fouling, surface defects, and downtime. Their excellent thermal stability and wear resistance make them suitable for repeated operation under harsh processing conditions.
          <br />
          <br />
          Key Benefits:
          <br />
          · Superior non-stick and easy-release performance
          <br />
          · Reduced material build-up and mold contamination
          <br />
          · Enhanced mold life and reduced maintenance
          <br />
          · Shoe and footwear molds
          <br />
          · Tire Rubber and elastomer industrial molds
          <br />
          · Textile rollers and processing equipment 
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
          heading="SPECIALITY COATINGS"
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

export default SpecialityCoatingsProducts;
