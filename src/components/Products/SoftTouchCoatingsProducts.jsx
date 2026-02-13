import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const SoftTouchCoatingsProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "SOFT TOUCH COATINGS",
      description: (
        <>
          TTC offers high-quality soft-touch coating solutions designed to enhance both functionality and aesthetics. Our advanced two-coat systems are dishwasher safe and provide excellent adhesion across a wide range of substrates, including ABS, PC, Bakelite, and pre-treated metal.
          <br />
          <br />
          Engineered with advanced soft-touch technology, these coatings deliver a luxurious velvet-like or rubberized feel, transforming everyday components such as cookware handles and electrical appliances into premium, comfort-focused products.
          <br />
          <br />
          TTC also provides customized coating solutions tailored to specific performance and design requirements, adding significant value and an enhanced consumer experience.
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
          heading="Industrial Coatings: Protection for Harsh Environments"
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

export default SoftTouchCoatingsProducts;
