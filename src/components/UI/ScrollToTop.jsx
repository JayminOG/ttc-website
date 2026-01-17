// src/components/UI/ArrowUpButton.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Show button only on Home page and when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/" && window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname !== "/") return null; // Hide on other pages

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg 
        bg-red text-white transition-all duration-300
        hover:scale-110 hover:shadow-xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};




export default ScrollToTop;

