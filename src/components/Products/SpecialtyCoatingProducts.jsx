import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/handle.png";
import img2 from "../../../public/products/bottle.png";
import { TitleHeading } from "../UI";

const SpecialtyCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "World-Class Exterior Protection",
      description:
        "Cookware needs to look as good as it performs. Our advanced exterior technology sets a new benchmark in innovation, specifically engineered to withstand intense cooking heat. These coatings protect surfaces from discoloration, wear, and environmental stress, ensuring your pots and pans maintain their pristine appearance even after rigorous use.",
      tableData: [
        { name: "Superior heat resistance prevents discoloration", brand: "Resists stains and oil marks for easy cleaning", coat: "Protects against wear and environmental stress" },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Vibrant Aesthetics & Premium Effects",
      description:
        "Transform cookware into a stunning visual statement. We offer a vibrant range of colors and textures that allow brands to express individuality. From elegant matte finishes to bold, high-gloss shades, our coatings add style and sophistication to modern kitchens without compromising on protection.",
      tableData: [
        {
          name: "Wide range of colors and textures",
          brand: "Available in matte, high-gloss, and premium effects",
          coat: "Enhances the overall look and value of the cookware",
        },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img2,
      title: "Luxurious Tactile Comfort",
      description:
        "The feel of a handle defines the user experience. Our premium soft-touch coatings elevate handles with a luxurious look and superior comfort. Featuring advanced technology, we create unmatched sensory experiences, ranging from velvet-smooth finishes to rubber-like textures that consumers instantly recognize and appreciate.",
      tableData: [
        {
          name: "Velvet-smooth and rubber-like texture options",
          brand: "Enhanced grip and heat insulation for better control",
          coat: "Adds a refined, premium feel to the product",
        },
      ],
      reverse: false,
    },
    {
      number: 4,
      image: img2,
      title: "Engineered for Durability",
      description:
        "Beauty must last. Our advanced 2-coat systems deliver exceptional durability while maintaining a smooth elegance. These coatings are dishwasher safe and provide excellent adhesion across a wide range of substrates; including ABS, PC, Bakelite, and pre-treated metals, ensuring consistent performance in demanding kitchen environments.",
      tableData: [
        {
          name: "Advanced 2-coat durability",
          brand: "Excellent adhesion on Bakelite, ABS, PC, & Metal",
          coat: "Dishwasher safe and highly durable",
        },
      ],
      reverse: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Innovations in Specialty Coating Technologies"
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

export default SpecialtyCoatingProducts;
