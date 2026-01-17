import React from "react";
import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react";
import logo from "../../assets/images/greeenage Logo.png";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header with Logo & Close Button */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
        <Link to="/">
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
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "What We Do", path: "/what-we-do" },
            { name: "Gallery", path: "/gallery" },
            { name: "News", path: "/news" },
            { name: "FAQs", path: "/faqs" },
          ].map(({ name, path }, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-gradients-menu text-green-700 font-semibold"
                    : " hover:text-green-700"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {`0${index + 1}. ${name}`}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col w-full lg:w-1/2 px-6 py-8 space-y-6">
          {/* SOCIAL LINKS CARD */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-blacks mb-4">
              Let’s be Friends :
            </h2>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 mb-5">
              <button className="flex items-center justify-center bg-blue hover:bg-[#3367D6] text-white px-4 py-2 rounded-full transition w-full sm:w-auto">
                <span className="mr-2 font-bold">G</span> Google
              </button>
              <button className="flex items-center justify-center bg-blue hover:bg-[#145DBF] text-white px-4 py-2 rounded-full transition w-full sm:w-auto">
                <span className="mr-2 font-bold">f</span> Facebook
              </button>
              <button className="flex items-center justify-center bg-blue hover:bg-[#005E93] text-white px-4 py-2 rounded-full transition w-full sm:w-auto">
                <span className="mr-2 font-bold">in</span> LinkedIn
              </button>
            </div>

            {/* Links */}
            <h3 className="font-semibold text-blacks mb-2 pt-4">Link :</h3>
            <div className="flex flex-wrap gap-5 text-blacks text-sm">
              <NavLink
                to="/about"
                className="hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/products"
                className="hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/faqs"
                className="hover:text-green-600"
                onClick={() => setMenuOpen(false)}
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
