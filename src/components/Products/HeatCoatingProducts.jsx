import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/nonstick-heat.png";
import { TitleHeading } from "../UI";

const HeatCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Reliable Release for Everyday Baking",
      description:
        "Baking requires precision, and PROTECTIX™ delivers the reliable release essential for daily use. This 2-layer system prevents sticking for flour and sugar-based mixtures, ensuring cakes and muffins slide out effortlessly while keeping production costs efficient.",
      tableData: [
        { name: "2-Layer Non-Stick Technology", brand: "Consistent release for standard baking needs", coat: "Residential bakeware tins and trays" },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img1,
      title: "Enhanced Durability for Roasting & Baking",
      description:
        "For bakeware that sees heavier use, PROTECTIX™+ offers upgraded abrasion resistance. Its advanced fluoropolymer formulation withstands the wear of metal utensils and cleaning, maintaining superior surface integrity for longer-lasting trays and roasting pans.",
      tableData: [
        { name: "Enhanced 2-Layer System", brand: "Improved abrasion resistance against wear", coat: "Advanced Fluoropolymer formulation" },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img1,
      title: "Premium 3-Layer Protection",
      description:
        "Designed for demanding baking environments, SHIELDON™ features a reinforced 3-layer structure. It provides a tougher barrier against caramelized sugars and burnt-on residues, ensuring easy cleaning and extended service life for premium bakeware collections.",
      tableData: [
        { name: "3-Layer Coating Technology", brand: "Added layer for superior surface hardness", coat: "Excellent resistance to sugar and grease residue" },
      ],
      reverse: false,
    },
    {
      number: 4,
      image: img1,
      title: "Ultimate Professional Grade",
      description:
        "The gold standard for serious bakers. SHIELDON™+ utilizes nano-metal reinforcement to deliver exceptional thermal shock resistance and toughness. It survives extreme oven cycles and heavy-duty usage without peeling, making it ideal for professional and commercial-grade bakeware.",
      tableData: [
        { name: "Nano-Metal Reinforced 3-Layer System", brand: "Superior thermal shock stability", coat: "Professional and heavy-duty baking applications" },
      ],
      reverse: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Heat Resistance and Performance of Modern Coatings"
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

export default HeatCoatingProducts;
