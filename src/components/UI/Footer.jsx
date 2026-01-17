import React from "react";
import { motion } from "framer-motion";
import logo from "../../../public/header/logo-footer.png";

// SOCIAL ICONS
import LinkedinIcon from "../../../public/social/linkedin.png";
import WhatsappIcon from "../../../public/social/whatsapp.png";
import GmailIcon from "../../../public/social/gmail.png";
import TwitterIcon from "../../../public/social/x.png";

// GALLERY IMAGES
import G1 from "../../../public/gallery/galleryImage1.jpg";
import G2 from "../../../public/gallery/galleryImage2.png";
import G3 from "../../../public/gallery/galleryImage3.jpg";
import G4 from "../../../public/gallery/galleryImage4.png";
import G5 from "../../../public/gallery/galleryImage5.png";
import G6 from "../../../public/gallery/galleryImage6.jpg";
import { useNavigate } from "react-router-dom";

const galleryImages = [G1, G2, G3, G4, G5, G6];

// Smooth Fade
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container for whole footer
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white overflow-hidden">
      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[#182683] text-center text-white py-3 text-sm font-medium tracking-wide"
      >
        We Provide Best Quality Services
      </motion.div>

      {/* MAIN GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-[1450px] mx-auto px-6 lg:px-16 py-16 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-14 gap-x-10"
      >
        {/* LEFT SECTION */}
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <img src={logo} alt="logo" className="h-14" />

          <p className="text-gray text-[15px] leading-relaxed mt-4 max-w-sm">
            TTC is a dynamic startup specializing in "Next-Gen High Performance Non-Stick Coatings." We combine 25+ years of experience with advanced technology to deliver superior surface solutions.
          </p>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={container}
            className="flex items-center gap-4 mt-6"
          >
            {[LinkedinIcon, WhatsappIcon, GmailIcon, TwitterIcon].map(
              (icon, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.15,
                    rotate: 2,
                    transition: { duration: 0.25 },
                  }}
                  className="w-10 h-10 border border-white/60 rounded-full 
                flex justify-center items-center cursor-pointer 
                hover:bg-white hover:opacity-100 transition-all duration-300"
                >
                  <img src={icon} className="w-[19px]" />
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Company */}
        <motion.div variants={fadeUp} className="lg:col-span-1">
          <h4 className="text-[20px] font-medium mb-5">Company</h4>
          <ul className="space-y-3 text-gray">
            {[
              { name: "About Us", link: "/about" },
              { name: "Products", link: "/products/cookware" },
              { name: "Privacy Policy", link: "/privacy-policy" },
              { name: "Blogs", link: "/blog" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                whileHover={{ x: 5, color: "#fff" }}
                className="cursor-pointer"
                onClick={() => navigate(item.link)}
              >
                → {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Get Help */}
        <motion.div variants={fadeUp} className="lg:col-span-1">
          <h4 className="text-[20px] font-medium mb-5">Get Help</h4>
          <ul className="space-y-3 text-gray">
            {[
              { name: "FAQs", link: "/faqs" },
              { name: "Terms & Conditions", link: "/privacy-policy" },
              { name: "Privacy Policy", link: "/privacy-policy" },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                whileHover={{ x: 5, color: "#fff" }}
                className="cursor-pointer"
                onClick={() => navigate(item.link)}
              >
                → {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Gallery */}
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <h4 className="text-[20px] font-medium mb-5">Gallery</h4>

          <div className="grid grid-cols-3 gap-x-5 gap-y-6 md:gap-x-6 md:gap-y-7">
            {galleryImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                className="w-[92px] h-[92px] md:w-[95px] md:h-[95px]
                rounded-lg object-cover transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="border-t border-white/25"></div>
        <p className="text-center py-4 text-sm text-gray">
          © 2025 TTC. All rights reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
