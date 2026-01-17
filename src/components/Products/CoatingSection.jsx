import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/nonstick.png";
import img2 from "../../../public/products/interior-ceramic.png";
import img3 from "../../../public/products/exterior.png";
import { TitleHeading } from "../UI";

const CoatingSection = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Reliable 2-Layer Performance",
      description:
        "Engineered for value-driven applications, PROTECTIX™ offers an ideal balance between performance and cost efficiency. This 2-layer system delivers a consistent, smooth release that makes it the smart choice for everyday entry-level cookware.",
      tableData: [
        { name: "2-Layer Non-Stick Technology", brand: "Reliable smooth release", coat: "Entry-level and mass-market cookware" },
        // { name: "Premium & Top Coat", brand: "Protecttix Plus", coat: "2 Coat",},
        // { name: "Premium & Top Coat", brand: "Shildon", coat: "3 Coat" },
        // { name: "Premium & Top Coat", brand: "Shildon Plus", coat: "3 Coat" },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Enhanced Durability & Abrasion Resistance",
      description:
        "Designed to exceed standard expectations, PROTECTIX™+ features advanced fluoropolymer technology for superior wear resistance. It maintains surface integrity longer than standard coatings, making it perfect for brands seeking premium quality at a competitive price.",
      tableData: [
        {
          name: "Enhanced 2-Layer System",
          brand: "High abrasion resistance",
          coat: "Advanced Fluoropolymer Formulation",
        },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img3,
      title: "Premium 3-Layer Protection",
      description:
        "A robust upgrade for demanding kitchens. SHIELDON™ utilizes a 3-layer structure reinforced with specialized resins to significantly improve adhesion and durability. It withstands repeated cooking cycles while ensuring effortless cleaning and long service life.",
      tableData: [
        { name: "3-Layer Coating Technology", brand: "Fluoropolymer resin for hardness", coat: "Extended service life and wear resistance" },
        // { name: "Premium & Top Coat", brand: "-", coat: "2 Coat" },
      ],
      reverse: false,
    },
    {
      number: 4,
      image: img3,
      title: "The Ultimate Non-Stick Experience",
      description:
        "Our flagship solution for professional cookware. Infused with nano-metal particles, SHIELDON™+ offers exceptional thermal shock stability and scratch resistance. It creates a tough, resilient surface designed for intensive, long-term use without compromise.",
      tableData: [
        { name: "Nano-Metal Reinforced 3-Layer System", brand: "Superior thermal shock & scratch resistance", coat: "Premium and professional cookware" },
        // { name: "Premium & Top Coat", brand: "-", coat: "2 Coat" },
      ],
      reverse: true,
    },
    {
      number: 5,
      image: img3,
      title: "Next-Gen PFAS-Free Ceramic",
      description:
        "Experience the future of safe cooking with our Sol-Gel ceramic technology. CERAGREEN™ is 100% PFAS-free and non-toxic, forming a hard, heat-resistant structure that protects surfaces while delivering superior food release.",
      tableData: [
        { name: "Sol-Gel Nano-Particle Technology", brand: "100% PFAS-Free & Non-Toxic", coat: "High thermal resistance for searing" },
        // { name: "Premium & Top Coat", brand: "-", coat: "2 Coat" },
      ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Types Of Cookware Coatings Explained"
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

export default CoatingSection;
