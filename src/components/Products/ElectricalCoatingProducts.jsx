import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/Non-Stick-pen.png";
import img2 from "../../../public/products/ceramic.png";
import { TitleHeading } from "../UI";

const ElectricalCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Efficient Solutions for Daily Appliances",
      description:
        "Designed for cost-effective appliance manufacturing, PROTECTIX™ delivers reliable non-stick performance for everyday devices. It ensures smooth food release for products like sandwich toasters and irons, offering a quality finish that balances performance with production efficiency.",
      tableData: [
        { name: "2-Layer Non-Stick Technology", brand: "Consistent quality finish", coat: "Sandwich makers, irons, and entry-level heating elements" },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Enhanced Durability for Heating Elements",
      description:
        "For appliances that endure frequent heating cycles, PROTECTIX™+ offers upgraded protection. Its advanced fluoropolymer formula provides better abrasion resistance than standard coatings, ensuring heating plates and bowls maintain their integrity over time.",
      tableData: [
        {
          name: "Enhanced 2-Layer System",
          brand: "High abrasion resistance",
          coat: "Advanced Fluoropolymer formulation",
        },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img2,
      title: "Premium Protection for Multi-Cookers",
      description:
        "SHIELDON™ brings 3-layer durability to the appliance sector. Reinforced for toughness, it is ideal for removable pots in rice cookers and multi-cookers, allowing for easy cleaning and resistance to wear from serving spoons and cleaning.",
      tableData: [
        {
          name: "3-Layer Coating Technology",
          brand: "Improved adhesion and hardness",
          coat: "Long-lasting performance for removable parts",
        },
      ],
      reverse: false,
    },
    {
      number: 4,
      image: img2,
      title: "Ultimate Resistance for Heavy-Duty Use",
      description:
        "The top choice for high-end appliances. SHIELDON™+ uses nano-metal reinforcement to withstand thermal shock and scratching. It is engineered for devices that reach high temperatures rapidly, ensuring the coating remains intact and performs safely under stress.",
      tableData: [
        {
          name: "Nano-Metal Reinforced 3-Layer System",
          brand: "Exceptional thermal shock stability",
          coat: "Premium grills, air fryers, and professional appliances",
        },
      ],
      reverse: true,
    },
    {
      number: 5,
      image: img2,
      title: "Safe, Eco-Friendly High-Heat Solutions",
      description:
        "Perfect for health-conscious appliance lines like air fryers and healthy grills. CERAGREEN™ is 100% PFAS-free and withstands high operating temperatures. Its sol-gel ceramic structure creates a hard, protective layer that is safe, non-toxic, and easy to clean.",
      tableData: [
        {
          name: "Sol-Gel Nano-Particle Technology",
          brand: "100% PFAS-Free & Non-Toxic",
          coat: "High thermal resistance for baking and grilling",
        },
      ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Types of Coatings for Electrical Appliances"
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

export default ElectricalCoatingProducts;
