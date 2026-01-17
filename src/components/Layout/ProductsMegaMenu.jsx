import React, { useState } from "react";
import { Link } from "react-router-dom";
import sprayImg from "../../../public/products/spray.png";

export const categories = [
    { name: "Cookware", url: "/products/cookware" },
    { name: "Bakeware", url: "/products/bakeware" },
    { name: "Electrical Appliance", url: "/products/electrical-appliance" },
    { name: "Specialty Coatings", url: "/products/specialty-coatings" },
    { name: "UV Coatings", url: "/products/uv-coatings" },
    { name: "Industrial Coatings", url: "/products/industrial-coatings" },
  ];
const ProductsMegaMenu = () => {
  const [active, setActive] = useState("Cookware");



  return (
    <div className="absolute left-0 top-8 w-[950px] bg-white rounded-xl shadow-black flex overflow-hidden z-[1000]">

      {/* LEFT SIDE */}
      <div className="w-[40%] bg-[#2b242d] p-6 flex flex-col gap-4">
        <h3 className="text-white text-2xl font-semibold">Products</h3>
        <img src={sprayImg} className="w-full h-48 object-cover rounded-xl" />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[60%] bg-white p-4 flex flex-col gap-3">
        {categories.map((item, i) => (
          <Link
            key={i}
            to={item.url}
            onMouseEnter={() => setActive(item.name)}
            className={`flex justify-between items-center text-[20px] cursor-pointer transition 
              ${active === item.name ? "text-[#B91E1E] font-semibold" : "text-gray-600"}
            `}
          >
            <span>{item.name}</span>
            → 
            {/* <IoIosArrowForward size={20} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsMegaMenu;
