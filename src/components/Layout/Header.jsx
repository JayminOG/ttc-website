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
                    isActive
                      ? "text-[#B91E1E]"
                      : "hover:text-[#B91E1E]"
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        <Button text="Get A Quote" onClick={() => (window.location.href = "/")} />
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-[1000] p-6 transition-all duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <IoMdClose size={30} />
        </button>

        <nav className="flex flex-col gap-5 text-lg ">
          {menu.map((item) =>
            item.label === "Products" ? (
              <div key={item.label}>
                <div
                  className="flex justify-between"
                  onClick={() => {
                    setOpenProducts(!openProducts);
                    setOpenBrands(false);
                  }}
                >
                  Products <IoIosArrowDown />
                </div>

                {openProducts && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {categories.map((c, i) => (
                      <NavLink
                        key={i}
                        to={c.url}
                        onClick={() => setMenuOpen(false)}
                      >
                        {c.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : item.label === "Brands" ? (
              <div key={item.label}>
                <div
                  className="flex justify-between"
                  onClick={() => {
                    setOpenBrands(!openBrands);
                    setOpenProducts(false);
                  }}
                >
                  Brands <IoIosArrowDown />
                </div>

                {openBrands && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {brands.map((b, i) => (
                      <NavLink
                        key={i}
                        to={b.url}
                        onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
