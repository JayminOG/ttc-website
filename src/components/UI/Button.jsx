import React from "react";
import { motion } from "framer-motion";
import ArrowRight from "../../../public/header/arrow-right.png";

const Button = ({
  text = "Contact Us",
  onClick = () => {},
  className = "",
}) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 25 }}           // start position
      whileInView={{ opacity: 1, y: 0 }}        // animate in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}   // re-animate on re-scroll
      whileHover={{ scale: 1.05 }}              // hover animation
      whileTap={{ scale: 0.97 }}                // click animation
      className={`flex items-center gap-3 bg-red text-white font-medium 
      px-3 py-3.5 rounded-full hover:bg-[#a51213] transition-all duration-300 
      ${className}`}
    >
      {text}

      <motion.span
        initial={{ opacity: 0, x: -10 }}         // small stagger reveal delay
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="w-6 h-6 rounded-full bg-white flex justify-center items-center"
      >
        <img src={ArrowRight} alt="ArrowRight" height={20} />
      </motion.span>
    </motion.button>
  );
};

export default Button;
