import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

import logo from "../../../public/header/logo.png";

// SOCIAL IMAGES
import Gmail from "../../../public/social/gmail.png";
import Phone from "../../../public/social/phone.png";
import Linkedin from "../../../public/social/linkedin.png";
import Whatsapp from "../../../public/social/whatsapp.png";
import Mail from "../../../public/social/gmail.png";
import X from "../../../public/social/x.png";

import Button from "../UI/Button";
import ProductsMegaMenu, { categories } from "./ProductsMegaMenu";
import BrandsMegaMenu, { brands } from "./BrandsMegaMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [openProducts, setOpenProducts] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);

  // Mobile submenu states
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);

  const dropdownTimeoutRef = useRef(null);

  // ================= DESKTOP HOVER =================
  const handleEnter = (type) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);

    if (type === "products") {
      setOpenProducts(true);
      setOpenBrands(false); // close brands
    } else {
      setOpenBrands(true);
      setOpenProducts(false); // close products
    }
  };

  const handleLeave = (type) => {
    dropdownTimeoutRef.current = setTimeout(() => {
      if (type === "products") {
        setOpenProducts(false);
      } else {
        setOpenBrands(false);
      }
    }, 200);
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

  const handleMobileMenuClose = () => {
    setMenuOpen(false);
    setOpenProducts(false);
    setOpenBrands(false);
    setExpandedCategory(null);
    setExpandedSubCategory(null);
  };

  const menu = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Brands", to: "/brands" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "FAQs", to: "/faqs" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-black text-white py-3 px-4 hidden md:flex justify-between items-center rounded-b-3xl">
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="border border-white w-8 h-8 rounded-full flex justify-center items-center">
              <img src={Gmail} className="w-4" />
            </span>
            <p>garry@empathy-technologies.com</p>
          </div>

          <span className="h-6 w-[1px] bg-gray"></span>

          <div className="flex items-center gap-2">
            <span className="border border-white w-8 h-8 rounded-full flex justify-center items-center">
              <img src={Phone} className="w-4" />
            </span>
            <p>+91 63967 95374</p>
          </div>
        </div>

        <div className="flex gap-3">
          {[Linkedin, Whatsapp, Mail, X].map((icon, i) => (
            <span
              key={i}
              className="border border-white w-8 h-8 rounded-full flex justify-center items-center hover:bg-white transition"
            >
              <img src={icon} className="w-4" />
            </span>
          ))}
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="bg-white w-full py-4 px-4 lg:px-12 flex justify-between items-center">
        <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
          <BiMenuAltLeft size={30} />
        </button>

        <div className="flex items-center gap-6">
          <Link to="/">
            <img src={logo} className="h-14" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex gap-10 text-[17px]">
            {menu.map((item) =>
              item.label === "Products" || item.label === "Brands" ? (
                <div
                  key={item.label}
                  className="relative cursor-pointer"
                  onMouseEnter={() =>
                    handleEnter(
                      item.label === "Products" ? "products" : "brands"
                    )
                  }
                  onMouseLeave={() =>
                    handleLeave(
                      item.label === "Products" ? "products" : "brands"
                    )
                  }
                >
                  <div className="flex items-center gap-1 hover:text-[#B91E1E]">
                    {item.label}
                    <IoIosArrowDown
                      size={14}
                      className={`transition ${
                        (item.label === "Products" && openProducts) ||
                        (item.label === "Brands" && openBrands)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </div>

                  {item.label === "Products" && openProducts && (
                    <div className="absolute top-full -left-[150%] z-50">
                      <ProductsMegaMenu />
                    </div>
                  )}

                  {item.label === "Brands" && openBrands && (
                    <div className="absolute top-full -left-[350%] z-50">
                      <BrandsMegaMenu />
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "text-[#B91E1E]" : "hover:text-[#B91E1E]"
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        <Button
          text="Get A Quote"
          onClick={() => (window.location.href = "/")}
        />
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={handleMobileMenuClose}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 left-0 w-full max-h-screen overflow-y-auto bg-white z-[1000] p-6 transition-all duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={handleMobileMenuClose}
        >
          <IoMdClose size={30} />
        </button>

        <nav className="flex flex-col gap-5 text-lg mt-8">
          {menu.map((item) =>
            item.label === "Products" ? (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    setOpenProducts(!openProducts);
                    setOpenBrands(false);
                    if (openProducts) {
                      setExpandedCategory(null);
                      setExpandedSubCategory(null);
                    }
                  }}
                >
                  <span>Products</span>
                  <IoIosArrowDown
                    className={`transition-transform ${
                      openProducts ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openProducts && (
                  <div className="ml-4 mt-3 flex flex-col gap-3">
                    {categories.map((category, i) => (
                      <div key={i}>
                        {/* Category with submenus */}
                        {category.subCategories &&
                        category.subCategories.length > 0 ? (
                          <div>
                            <div
                              className="flex justify-between items-center cursor-pointer text-base py-1"
                              onClick={() => toggleCategory(category.name)}
                            >
                              <span>{category.name}</span>
                              <IoIosArrowDown
                                className={`transition-transform ${
                                  expandedCategory === category.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                                size={16}
                              />
                            </div>

                            {/* Subcategories */}
                            {expandedCategory === category.name && (
                              <div className="ml-4 mt-2 flex flex-col gap-2">
                                {category.subCategories.map((subCat, j) => (
                                  <div key={j}>
                                    {/* Subcategory with items */}
                                    {subCat.items && subCat.items.length > 0 ? (
                                      <div>
                                        <div
                                          className="flex justify-between items-center cursor-pointer text-sm py-1"
                                          onClick={() =>
                                            toggleSubCategory(subCat.name)
                                          }
                                        >
                                          <span>{subCat.name}</span>
                                          <IoIosArrowDown
                                            className={`transition-transform ${
                                              expandedSubCategory ===
                                              subCat.name
                                                ? "rotate-180"
                                                : ""
                                            }`}
                                            size={14}
                                          />
                                        </div>

                                        {/* Items */}
                                        {expandedSubCategory ===
                                          subCat.name && (
                                          <div className="ml-4 mt-2 flex flex-col gap-1">
                                            {subCat.items.map((item, k) => (
                                              <NavLink
                                                key={k}
                                                to={item.url}
                                                onClick={handleMobileMenuClose}
                                                className="text-sm text-gray-700 hover:text-[#B91E1E] py-1"
                                              >
                                               {item.name}
                                              </NavLink>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      // Simple subcategory link
                                      <NavLink
                                        to={subCat.url}
                                        onClick={handleMobileMenuClose}
                                        className="text-sm text-gray-700 hover:text-[#B91E1E] py-1 block"
                                      >
                                        {subCat.name}
                                      </NavLink>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          // Category without submenus
                          <NavLink
                            to={category.url}
                            onClick={handleMobileMenuClose}
                            className="text-base hover:text-[#B91E1E] block py-1"
                          >
                            {category.name}
                          </NavLink>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : item.label === "Brands" ? (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    setOpenBrands(!openBrands);
                    setOpenProducts(false);
                    setExpandedCategory(null);
                    setExpandedSubCategory(null);
                  }}
                >
                  <span>Brands</span>
                  <IoIosArrowDown
                    className={`transition-transform ${
                      openBrands ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openBrands && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {brands.map((b, i) => (
                      <NavLink
                        key={i}
                        to={b.url}
                        onClick={handleMobileMenuClose}
                        className="hover:text-[#B91E1E]"
                      >
                        {b.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleMobileMenuClose}
                className={({ isActive }) =>
                  isActive ? "text-[#B91E1E]" : "hover:text-[#B91E1E]"
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
