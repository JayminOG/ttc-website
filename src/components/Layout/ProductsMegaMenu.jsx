import React, { useState } from "react";
import { Link } from "react-router-dom";
import sprayImg from "../../../public/products/spray.png";

export const categories = [
  {
    name: "Cookware",
    url: "/products/cookware",
    subCategories: [
      {
        name: "PTFE Non-Stick",
        items: [
          { name: "Protectix (2 Layer)", url: "/Brands/Protectix" },
          { name: "Protectix+ (2 Layer)", url: "/brands/protectix-plus" },
          { name: "Shieldon (3 Layer)", url: "/Brands/Shieldon" },
          { name: "Shieldon+ (3 Layer)", url: "/brands/shieldon-plus" },
        ],
      },
      {
        name: "Ceramic Non-Stick",
        items: [
          { name: "Ceragreen", url: "/brands/ceragreen" },
          { name: "Ceratough", url: "/products/cookware/ceramic/ceratough" },
        ],
      },
    ],
  },
  // {
  //   name: "Bakeware",
  //   url: "/products/bakeware",
  // },
  {
    name: "Bakeware",
    url: "/products/bakeware",
    subCategories: [
      {
        name: "Houseware",
        items: [
          { name: "Protectix (1 LAYER)", url: "/Brands/protectixone" },
        ],
      },
      {
        name: "Industrial",
        items: [
          { name: "Protectix+ (2 LAYER)", url: "/brands/protectix-plus" },
          { name: "Shieldon+ (3 LAYER)", url: "/brands/shieldon-plus" },
          { name: "PFA POWDER", url: "/brands/pfapowder" },
        ],
      },
    ],
  },
  // {
  //   name: "Electrical Appliances",
  //   url: "/products/electrical-appliances",
  // },
  {
    name: "Electrical Appliances",
    url: "/products/electrical-appliances",
    subCategories: [
      {
        name: "PTFE NON-STICK",
        items: [
          { name: "Protectix (1 LAYER)", url: "/Brands/protectixone" },
          { name: "Protectix+ (2 LAYER)", url: "/brands/protectix-plus" },
        ],
      },
      {
        name: "CERAMIC NON-STICK",
        items: [
          { name: "CERAGREEN", url: "/brands/ceragreen" },
        ],
      },
    ],
  },
  {
    name: "Roller Coatings",
    url: "/products/roller-coatings",
    subCategories: [
      {
        name: "Stonshild",
        url: "/brands/stonshild",
      },
    ],
  },
  {
    name: "Decorative Coatings",
    url: "/products/decorative-coatings",
    subCategories: [
      {
        name: "Soft Touch Coatings",
        url: "/products/soft-touch-coatings",
      },
      {
        name: "Cookware Exterior",
        url: "/products/cookware-exterior",
      },
    ],
  },
  {
    name: "Bottle Coatings",
    url: "/products/bottle-coatings",
  },
  {
    name: "UV/LED Curable Coatings",
    url: "/products/uv-led-coatings",
    subCategories: [
      {
        name: "Plastic",
        url: "/products/plastic",
      },
      {
        name: "Wood / SPC / PVC / PMMA",
        url: "/products/wood-spc-pvc-pmma",
      },
      {
        name: "Metal",
        url: "/products/metal",
      },
    ],
  },
  {
    name: "Speciality Coatings",
    url: "/products/speciality-coatings",
  },
];

const ProductsMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleCategoryHover = (categoryName) => {
    setActiveCategory(categoryName);
    setActiveSubMenu(null);
  };

  const handleSubMenuClick = (subMenuName) => {
    setActiveSubMenu(activeSubMenu === subMenuName ? null : subMenuName);
  };

  const activeData = activeCategory
    ? categories.find((cat) => cat.name === activeCategory)
    : null;
  const hasSubCategories =
    activeData?.subCategories && activeData.subCategories.length > 0;

  return (
    <div
      className={`absolute left-0 top-8 bg-white rounded-xl shadow-2xl flex overflow-hidden z-[1000] ${
        hasSubCategories ? "w-[1000px]" : "w-[700px]"
      }`}
    >
      {/* LEFT SIDE - Fixed 320px width */}
      <div className="w-[320px] min-w-[320px] max-w-[320px] bg-[#2b242d] p-6 flex flex-col gap-4">
        <h3 className="text-white text-2xl font-semibold">Products</h3>
        <img
          src={sprayImg}
          alt="Product"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      {/* MIDDLE - MAIN CATEGORIES - Fixed 380px width */}
      <div
        className={`w-[380px] min-w-[380px] max-w-[380px] bg-white p-4 flex flex-col gap-2 ${
          hasSubCategories ? "border-r border-gray-200" : ""
        }`}
      >
        {categories.map((item, i) => (
          item.subCategories && item.subCategories.length > 0 ? (
            <div
              key={i}
              onMouseEnter={() => handleCategoryHover(item.name)}
              className={`flex justify-between items-center px-3 py-2.5 text-[17px] cursor-pointer transition-colors rounded-md ${
                activeCategory === item.name
                  ? "text-[#B91E1E] font-semibold bg-red-50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{item.name}</span>
              <span className="text-gray-400">→</span>
            </div>
          ) : (
            <Link
              key={i}
              to={item.url}
              onMouseEnter={() => handleCategoryHover(item.name)}
              className={`flex justify-between items-center px-3 py-2.5 text-[17px] cursor-pointer transition-colors rounded-md ${
                activeCategory === item.name
                  ? "text-[#B91E1E] font-semibold bg-red-50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{item.name}</span>
            </Link>
          )
        ))}
      </div>

      {/* RIGHT SIDE - SUBCATEGORIES - Fixed 300px width when visible */}
      {hasSubCategories && (
        <div className="w-[300px] min-w-[300px] max-w-[300px] bg-gray-50 p-4 flex flex-col gap-2">
          {activeData.subCategories.map((subCat, i) => (
            <div key={i}>
              {/* If subcategory has items (nested), make it expandable */}
              {subCat.items ? (
                <div>
                  <div
                    onClick={() => handleSubMenuClick(subCat.name)}
                    className={`flex justify-between items-center px-3 py-2.5 text-[16px] cursor-pointer transition-colors rounded-md ${
                      activeSubMenu === subCat.name
                        ? "text-[#B91E1E] font-semibold bg-white"
                        : "text-gray-700 hover:bg-white"
                    }`}
                  >
                    <span>{subCat.name}</span>
                    <span
                      className={`transition-transform duration-200 ${
                        activeSubMenu === subCat.name ? "rotate-90" : ""
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {/* Nested items */}
                  {activeSubMenu === subCat.name && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {subCat.items.map((item, j) => (
                        <Link
                          key={j}
                          to={item.url}
                          className="px-3 py-2 text-[14px] text-gray-600 hover:text-[#B91E1E] hover:bg-white rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Simple link for subcategories without items
                <Link
                  to={subCat.url}
                  className="flex justify-between items-center px-3 py-2.5 text-[16px] text-gray-700 hover:text-[#B91E1E] hover:bg-white rounded-md transition-colors"
                >
                  <span>{subCat.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsMegaMenu;
