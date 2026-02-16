import React from "react";

import cookware from "../../../public/products/cookware.png";
import bakeware from "../../../public/products/bakeware.png";
import electrical from "../../../public/products/electrical.png";
import specialty from "../../../public/products/specialty.png";
import uvcoat from "../../../public/products/uvcoatings.png";
import industrial from "../../../public/products/industrial.png";

const products = [
  { id: 1, img: cookware, title: "Cookware", link: "/products/cookware" },
  { id: 2, img: bakeware, title: "Bakeware", link: "/products/bakeware" },
  { id: 3, img: electrical, title: "Electrical Appliance", link: "/products/electrical" },
  { id: 4, img: specialty, title: "Specialty Coatings", link: "/products/specialty" },
  { id: 5, img: uvcoat, title: "UV Coatings", link: "/products/uv-coatings" },
  { id: 6, img: industrial, title: "Industrial Coatings", link: "/products/industrial" },
];

const ProductsSection = () => {
  const handleCardClick = (link) => {
    // You can use React Router's useNavigate hook or window.location
    window.location.href = link;
    // Or with React Router: navigate(link);
  };

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
              onClick={() => handleCardClick(item.link)}
              className="group relative h-72 rounded-[18px] overflow-hidden shadow-lg 
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

              {/* TITLE - appears on hover at bottom left */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 
              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;