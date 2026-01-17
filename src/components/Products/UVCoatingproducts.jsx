import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/plastic.png";
import img2 from "../../../public/products/wood.png";
import img3 from "../../../public/products/metal.png";
import { TitleHeading } from "../UI";

const UVCoatingproducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Ultra-High Gloss & Super-Matt",
      description: "Elevate your product's visual appeal with our innovative formulations. Whether you need the deep clarity of an ultra-high gloss or the sophisticated touch of a super-matt effect, our coatings deliver exceptional surface quality. They set new benchmarks for clarity, depth, and uniformity beyond conventional systems.",
      tableData: [
        { name: "Ultra-high gloss, super-matt, and custom effects.", brand: "Superior levelling and clarity.", coat: "Premium visual appeal for consumer goods." },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Efficiency Meets Performance",
      description:
        "Time is money in manufacturing. Our UV/LED fast-curing technology ensures instant drying, enabling faster production cycles and reduced processing time. These eco-efficient formulations are low-VOC and energy-saving, delivering consistent, defect-free finishes without the wait.",
      tableData: [
        { name: "Rapid UV/LED curing", brand: "Instant curing for faster production", coat: "Low VOC and energy-efficient" },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img3,
      title: "Versatility Across Materials",
      description:
        "One system, multiple applications. NextG-UV is engineered to serve as both a premium topcoat and base coat for a wide range of substrates. It offers excellent adhesion and strong bonding, making it the ideal solution for plastics, engineering wood, furniture panels, and metal sheets.",
      tableData: [
        { name: "Strong bonding on diverse substrates", brand: "Excellent resistance to scratches and chemicals", coat: "Plastics, Wood, Laminates, & Metal" },
      ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="UV Coatings: Advanced Surface Protection"
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

export default UVCoatingproducts;
