import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import img2 from "../../../public/products/screws.png";
import { TitleHeading } from "../UI";

const IndustrialCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Precision Low-Friction Solutions",
      description:
        "Engineered for critical components, our coatings reduce torque variation and prevent seizing. By utilizing PTFE-based technology, we provide ultra-low friction and anti-galling properties, significantly extending the service life of threaded components and fasteners.",
      tableData: [
        { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Productivity for Complex Molds",
      description:
        "Efficiency starts with the release. Our silicone-based coatings offer high temperature stability and excellent lubrication characteristics. Designed for complex molds, they improve productivity and surface quality by ensuring clean, consistent part release every cycle.",
      tableData: [
        { name: "Silicone-Based high-temp stability", brand: "Advanced release for complex tooling", coat: "Improves manufacturing productivity" },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img2,
      title: "Defense & Harsh Environment Protection ",
      description:
        "We provide specialized coatings for components exposed to moisture, chemicals, and extreme conditions. From industrial machinery to defense equipment, our solutions comply with strict performance standards, offering superior hardness and reliable protection against corrosion.",
      tableData: [
        { name: "Sol-Gel & Specialized formulations", brand: "Defense arms & industrial equipment", coat: "Superior hardness and wear resistance" },
      ],
      reverse: false,
    },
    {
      number: 4,
      image: img2,
      title: "Extreme Heat Resistance",
      description:
        "Automotive components face intense thermal stress. We engineer heat-resistant coatings specifically for mufflers, silencers, and exhaust systems. These coatings withstand extreme operating temperatures while maintaining structural integrity and preventing thermal degradation.",
      tableData: [
        { name: "Mufflers, Silencers, Exhaust Systems", brand: "Withstands extreme operating temperatures", coat: "Long-term thermal protection" },
      ],
      reverse: true,
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

export default IndustrialCoatingProducts;
