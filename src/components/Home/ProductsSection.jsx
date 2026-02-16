import React from "react";

import cookware from "../../../public/products/cookware.png";
import bakeware from "../../../public/products/bakeware.png";
import electrical from "../../../public/products/electrical.png";
import roller from "../../../public/products/roller.png";
import decorative from "../../../public/products/decorative.png";
import bottle from "../../../public/products/bottle.png";
import uvled from "../../../public/products/uvled.png";
import specialty from "../../../public/products/specialty.png";

const products = [
  { id: 1, img: cookware, title: "COOKWARE", link: "/products/cookware" },
  { id: 2, img: bakeware, title: "BAKEWARE", link: "/products/bakeware" },
  { id: 3, img: electrical, title: "ELECTRICAL APPLIANCES", link: "/products/electrical" },
  { id: 4, img: roller, title: "ROLLER COATINGS", link: "/products/roller" },
  { id: 5, img: decorative, title: "DECORATIVE COATINGS", link: "/products/decorative" },
  { id: 6, img: bottle, title: "BOTTLE COATINGS", link: "/products/bottle" },
  { id: 7, img: uvled, title: "UV/LED CURABLE COATINGS", link: "/products/uvled" },
  { id: 8, img: specialty, title: "SPECIALITY COATINGS", link: "/products/specialty" },
];

const ProductsSection = () => {
  const handleCardClick = (link) => {
    // You can use React Router's useNavigate hook or window.location
    window.location.href = link;
    // Or with React Router: navigate(link);
  };

  return (
    <section className="py-20 w-full flex justify-center bg-white">
      <div className="max-w-7xl w-full px-6">
        {/* HEADING */}
        <h2 className="text-center text-black text-[32px] md:text-[40px] font-bold mb-14 uppercase tracking-wide">
          Coating Products For All Application
        </h2>

        {/* PRODUCT GRID - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.link)}
              className="group relative h-44 rounded-xl overflow-hidden 
              transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 
                group-hover:scale-110"
              />

              {/* DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
              group-hover:from-black/80 transition-all duration-300">
              </div>

              {/* TITLE - centered with background shadow on hover */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-xl md:text-lg font-semibold text-center uppercase 
                tracking-wide transform group-hover:scale-110 transition-all duration-300
                px-4 py-2 rounded-lg
                group-hover:bg-black/40 group-hover:backdrop-blur-sm
                drop-shadow-lg">
                  {item.title}
                </h3>
              </div>

              {/* HOVER BORDER EFFECT */}
              <div className="absolute inset-0 border-4 border-transparent 
              group-hover:border-white/30 transition-all duration-300 rounded-xl">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;