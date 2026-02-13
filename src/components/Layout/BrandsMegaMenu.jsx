import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandImg from "../../../public/brands/protectixPlus.png";
export const brands = [
  { name: "PROTECTIX™", url: "/brands/protectix" },
  { name: "PROTECTIX™+", url: "/brands/protectix-plus" },
  { name: "SHIELDON™", url: "/brands/shieldon" },
  { name: "SHIELDON™+", url: "/brands/shieldon-plus" },
  { name: "STONSHILD", url: "/brands/stonshild" },
  { name: "CERAGREEN", url: "/brands/ceragreen" },
  { name: "CERATOUGH", url: "/brands/ceratough" },
];

const BrandsMegaMenu = () => {
  const [active, setActive] = useState("PROTECTIX™");

  return (
    <div className="absolute left-0 top-8 w-[950px] bg-white rounded-xl shadow-black flex overflow-hidden z-[1000]">

      {/* LEFT SIDE */}
      <div className="w-[40%] bg-[#2b242d] p-6 flex flex-col gap-4">
        <h3 className="text-white text-2xl font-semibold">Brands</h3>
        <img
          src={brandImg}
          className="w-full h-48 object-cover rounded-xl"
          alt="Brands"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[60%] bg-white p-4 flex flex-col gap-4">
        {brands.map((item, i) => (
          <Link
            key={i}
            to={item.url}
            onMouseEnter={() => setActive(item.name)}
            className={`flex justify-between items-center text-[20px] cursor-pointer transition
              ${
                active === item.name
                  ? "text-[#B91E1E] font-semibold"
                  : "text-gray-600"
              }
            `}
          >
            <span>{item.name}</span>
            →
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsMegaMenu;
