import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../../assets/images/greeenage Logo.png";

const categories = [
  {
    name: "Cookware",
    url: "/products/cookware",
    subCategories: [
      {
        name: "PTFE Non-Stick",
        items: [
          { name: "Protectix (2 Layer)", url: "/products/cookware/ptfe/protectix" },
          { name: "Protectix+ (2 Layer)", url: "/products/cookware/ptfe/protectix-plus" },
          { name: "Shieldon (3 Layer)", url: "/products/cookware/ptfe/shieldon" },
          { name: "Shieldon+ (3 Layer)", url: "/products/cookware/ptfe/shieldon-plus" },
        ],
      },
      {
        name: "Ceramic Non-Stick",
        items: [
          { name: "Ceragreen", url: "/products/cookware/ceramic/ceragreen" },
          { name: "Ceratough", url: "/products/cookware/ceramic/ceratough" },
        ],
      },
    ],
  },
  {
    name: "Bakeware",
    url: "/products/bakeware",
  },
  {
    name: "Electrical Appliances",
    url: "/products/electrical-appliances",
  },
  {
    name: "Roller Coatings",
    url: "/products/roller-coatings",
    subCategories: [
      {
        name: "Stonshild",
        url: "/products/roller-coatings/stonshild",
      },
    ],
  },
  {
    name: "Decorative Coatings",
    url: "/products/decorative-coatings",
    subCategories: [
      {
        name: "Soft Touch Coatings",
        url: "/products/decorative-coatings/soft-touch",
      },
      {
        name: "Cookware Exterior",
        url: "/products/decorative-coatings/cookware-exterior",
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
        url: "/products/uv-led-coatings/plastic",
      },
      {
        name: "Wood / SPC / PVC / PMMA",
        url: "/products/uv-led-coatings/wood",
      },
      {
        name: "Metal",
        url: "/products/uv-led-coatings/metal",
      },
    ],
  },
  {
    name: "Speciality Coatings",
    url: "/products/speciality-coatings",
  },
];

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);
  const [productsExpanded, setProductsExpanded] = useState(false);

  const toggleProductsMenu = () => {
    setProductsExpanded(!productsExpanded);
    if (productsExpanded) {
      setExpandedCategory(null);
      setExpandedSubCategory(null);
    }
  };

  const toggleCategory = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
      setExpandedSubCategory(null);
    } else {
      setExpandedCategory(categoryName);
      setExpandedSubCategory(null);
    }
  };

  const toggleSubCategory = (subCategoryName) => {
    setExpandedSubCategory(
      expandedSubCategory === subCategoryName ? null : subCategoryName
    );
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setProductsExpanded(false);
    setExpandedCategory(null);
    setExpandedSubCategory(null);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header with Logo & Close Button */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="GreenAge Logo" className="h-12" />
        </Link>
        <button
          onClick={() => setMenuOpen(false)}
          className="flex justify-center items-center focus:outline-none w-8 h-8 bg-black rounded-full"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row h-full pb-40 overflow-y-auto">
        {/* LEFT SIDE MENU ITEMS */}
        <nav className="flex flex-col w-full md:w-1/2 space-y-2 px-6 py-8 text-lg lg:text-2xl font-medium h-full">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradients-menu text-green-700 font-semibold"
                  : " hover:text-green-700"
              }`
            }
            onClick={handleLinkClick}
          >
            01. Home
          </NavLink>

          {/* About Us */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradients-menu text-green-700 font-semibold"
                  : " hover:text-green-700"
              }`
            }
            onClick={handleLinkClick}
          >
            02. About Us
          </NavLink>

          {/* Products with Expandable Menu */}
          <div>
            <div
              onClick={toggleProductsMenu}
              className="px-4 py-3 transition-all duration-300 hover:text-green-700 cursor-pointer flex justify-between items-center"
            >
              <span>03. Products</span>
              {productsExpanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>

            {/* Product Categories */}
            {productsExpanded && (
              <div className="ml-6 mt-2 space-y-1">
                {categories.map((category, idx) => (
                  <div key={idx}>
                    {/* Category Item */}
                    {category.subCategories && category.subCategories.length > 0 ? (
                      <div>
                        <div
                          onClick={() => toggleCategory(category.name)}
                          className="px-3 py-2.5 text-base hover:text-green-700 cursor-pointer flex justify-between items-center rounded hover:bg-gray-50"
                        >
                          <span>{category.name}</span>
                          {expandedCategory === category.name ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </div>

                        {/* SubCategories */}
                        {expandedCategory === category.name && (
                          <div className="ml-4 mt-1 space-y-1">
                            {category.subCategories.map((subCat, subIdx) => (
                              <div key={subIdx}>
                                {/* SubCategory with items */}
                                {subCat.items && subCat.items.length > 0 ? (
                                  <div>
                                    <div
                                      onClick={() =>
                                        toggleSubCategory(subCat.name)
                                      }
                                      className="px-3 py-2 text-sm hover:text-green-700 cursor-pointer flex justify-between items-center rounded hover:bg-gray-50"
                                    >
                                      <span>{subCat.name}</span>
                                      {expandedSubCategory === subCat.name ? (
                                        <ChevronDown className="w-4 h-4" />
                                      ) : (
                                        <ChevronRight className="w-4 h-4" />
                                      )}
                                    </div>

                                    {/* Nested Items */}
                                    {expandedSubCategory === subCat.name && (
                                      <div className="ml-4 mt-1 space-y-1">
                                        {subCat.items.map((item, itemIdx) => (
                                          <Link
                                            key={itemIdx}
                                            to={item.url}
                                            onClick={handleLinkClick}
                                            className="block px-3 py-2 text-sm hover:text-green-700 hover:bg-gray-50 rounded"
                                          >
                                            {item.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  // Simple subcategory link (no items)
                                  <Link
                                    to={subCat.url}
                                    onClick={handleLinkClick}
                                    className="block px-3 py-2 text-sm hover:text-green-700 hover:bg-gray-50 rounded"
                                  >
                                    {subCat.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      // Category without subcategories
                      <Link
                        to={category.url}
                        onClick={handleLinkClick}
                        className="block px-3 py-2.5 text-base hover:text-green-700 hover:bg-gray-50 rounded"
                      >
                        {category.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <NavLink
            to="/what-we-do"
            className={({ isActive }) =>
              `px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradients-menu text-green-700 font-semibold"
                  : " hover:text-green-700"
              }`
            }
            onClick={handleLinkClick}
          >
            04. What We Do
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradients-menu text-green-700 font-semibold"
                  : " hover:text-green-700"
              }`
            }
            onClick={handleLinkClick}
          >
            05. Gallery
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              `px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradients-menu text-green-700 font-semibold"
                  : " hover:text-green-700"
              }`
            }
            onClick={handleLinkClick}
          >
            06. News
          </NavLink>

          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradients-menu text-green-700 font-semibold"
                  : " hover:text-green-700"
              }`
            }
            onClick={handleLinkClick}
          >
            07. FAQs
          </NavLink>
        </nav>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col w-full lg:w-1/2 px-6 py-8 space-y-6">
          {/* SOCIAL LINKS CARD */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-blacks mb-4">
              Let's be Friends :
            </h2>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 mb-5">
              <button className="flex items-center justify-center bg-blue hover:bg-[#3367D6] text-white px-4 py-2 rounded-full transition w-full sm:w-auto">
                <span className="mr-2 font-bold">G</span> Google
              </button>
              <button className="flex items-center justify-center bg-blue hover:bg-[#145DBF] text-white px-4 py-2 rounded-full transition w-full sm:w-auto">
                <span className="mr-2 font-bold">f</span> Facebook
              </button>
              <button className="flex items-center justify-center bg-blue hover:bg-[#145DBF] text-white px-4 py-2 rounded-full transition w-full sm:w-auto">
                <span className="mr-2 font-bold">in</span> LinkedIn
              </button>
            </div>

            {/* Links */}
            <h3 className="font-semibold text-blacks mb-2 pt-4">Link :</h3>
            <div className="flex flex-wrap gap-5 text-blacks text-sm">
              <NavLink
                to="/about"
                className="hover:text-green-600"
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
              <NavLink
                to="/products"
                className="hover:text-green-600"
                onClick={handleLinkClick}
              >
                Products
              </NavLink>
              <NavLink
                to="/faqs"
                className="hover:text-green-600"
                onClick={handleLinkClick}
              >
                FAQs
              </NavLink>
            </div>
          </div>

          {/* CONTACT INFORMATION CARD */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg md:text-xl xl:text-3xl font-semibold text-blacks mb-3">
              Contact Information :
            </h2>
            <p className="text-grays text-sm md:tex-md xl:text-2xl mb-5">
              info@greenageind.com | sales@greenageind.com
            </p>
            <p className="text-grays text-sm md:tex-md xl:text-2xl mb-5">
              +91 98882 04889 | +91 92075 85421
            </p>
            <p className="text-grays text-sm md:tex-md xl:text-2xl">
              GreenAge Industries, Plot No 123, Road No 6, Phase I <br />
              Kathwada GIDC, Ahmedabad - 382430, (Gujarat), India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
