import React from "react";

import cookware from "../../../public/products/cookware.png";
import bakeware from "../../../public/products/bakeware.png";
import electrical from "../../../public/products/electrical.png";
import specialty from "../../../public/products/specialty.png";
import uvcoat from "../../../public/products/uvcoatings.png";
import industrial from "../../../public/products/industrial.png";

const products = [
  { id: 1, img: cookware, title: "Cookware", desc: "From the value-driven PROTECTIX™ & PROTECTIX™ + to the ultra-durable SHIELDON™ & SHIELDON™ +  and eco-friendly CERAGREEN™, we offer the perfect non-stick solution for every frying pan, wok, and pot." },
  { id: 2, img: bakeware, title: "Bakeware", desc: "Engineered for the oven. Our coatings ensure sugar and flour-based creations release perfectly every time, resisting sugar burns and high baking temperatures." },
  { id: 3, img: electrical, title: "Electrical Appliance", desc: "Specialized formulations for sandwich makers, rice cookers, air fryers, and dry and steam irons. Our coating solutions deliver consistent, reliable non-stick performance, along with excellent wear and heat resistance for electrical appliances." },
  { id: 4, img: specialty, title: "Specialty Coatings", desc: "Elevate aesthetics and touch. This range includes our vibrant, heat-resistant Exterior Coatings and luxurious Soft-Touch Handle Coatings for superior grip and visual appeal." },
  { id: 5, img: uvcoat, title: "UV Coatings", desc: "Speed meets quality. Our NextG-UV solutions provide instant curing, ultra-high gloss, or super-matt finishes for wood, plastics, and metal sheets." },
  { id: 6, img: industrial, title: "Industrial Coatings", desc: "Built for the toughest environments. We engineer low-friction, anti-corrosion, and defense-grade coatings for fasteners, automotive parts, and industrial molds." },
];

const ProductsSection = () => {
  return (
    <section className="py-20 w-full flex justify-center bg-gradient-to-br from-[#36142E] via-[#3A2541] to-[#1B1B36]">

      <div className="max-w-7xl w-full px-6">

        {/* TAG */}
        <div className="flex justify-center">
          <p className="px-4 py-1 text-sm bg-white/10 border border-white/20 text-white rounded-full">
            ✦ Our Products
          </p>
        </div>

        {/* HEADING */}
        <h2 className="text-center text-white text-[32px] md:text-[38px] font-semibold mt-5 mb-14">
          Advanced Coating Products
        </h2>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white/10 backdrop-blur-md border border-white/20 hover:border-red-600 
              rounded-[18px] overflow-hidden shadow-sm transition-all duration-300
              hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-2 cursor-pointer p-5"
            >
              {/* IMAGE */}
              <div className="w-full h-48 overflow-hidden ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-5">
                <h3 className="text-lg font-semibold group-hover:text-black/85 text-white/100">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80 group-hover:text-black/70 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Learn more button */}
                <button className="mt-4 text-white/100 font-medium inline-flex items-center gap-1 group-hover:text-red-600">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
