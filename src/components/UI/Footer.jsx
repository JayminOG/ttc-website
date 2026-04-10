import React from "react";
import { motion } from "framer-motion";
import logo from "../../../public/header/logo-footer.png";
import { useNavigate } from "react-router-dom";

// SOCIAL ICONS
import LinkedinIcon from "../../../public/social/linkedin.png";
import WhatsappIcon from "../../../public/social/whatsapp.png";
import GmailIcon from "../../../public/social/gmail.png";
import TwitterIcon from "../../../public/social/x.png";

// GALLERY IMAGES
import G1 from "../../../public/gallery/1.png";
import G2 from "../../../public/gallery/2.png";
import G3 from "../../../public/gallery/3.png";
import G4 from "../../../public/gallery/4.png";
import G5 from "../../../public/gallery/5.png";
import G6 from "../../../public/gallery/6.png";

const galleryImages = [G1, G2, G3, G4, G5, G6];

// ✅ SOCIAL LINKS
const socialLinks = [
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/company/t-t-c-pvt-ltd/posts/?feedView=all",
    alt: "LinkedIn",
  },
  {
    icon: WhatsappIcon,
    link: "https://wa.me/916396795374",
    alt: "WhatsApp",
  },
  {
    icon: GmailIcon,
    link: "mailto:info@ttcpl.com",
    alt: "Email",
  },
  // {
  //   icon: TwitterIcon,
  //   link: "https://twitter.com/yourhandle",
  //   alt: "Twitter",
  // },
];

// Smooth Fade
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container
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
        transition={{ duration: 0.9 }}
        className="bg-[#182683] text-center py-3 text-sm font-medium"
      >
        We Provide Best Quality Services
      </motion.div>

      {/* MAIN GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="max-w-[1450px] mx-auto px-6 lg:px-16 py-16 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-14 gap-x-10"
      >
        {/* LEFT */}
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <img src={logo} alt="logo" className="h-14" />

          <p className="text-gray text-[15px] mt-4 max-w-sm">
            TTC is a dynamic startup specializing in "Next-Gen High Performance Non-Stick Coatings."
          </p>

          {/* ✅ SOCIAL ICONS WITH LINKS */}
          <motion.div variants={container} className="flex gap-4 mt-6">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{
                  scale: 1.15,
                  rotate: 2,
                }}
                className="w-10 h-10 border border-white/60 rounded-full 
                flex justify-center items-center cursor-pointer 
                transition-all duration-300"
              >
                <img src={item.icon} className="w-[19px]" alt={item.alt} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Company */}
        <motion.div variants={fadeUp}>
          <h4 className="text-[20px] mb-5">Company</h4>
          <ul className="space-y-3 text-gray">
            {[
              { name: "About Us", link: "/about" },
              { name: "Privacy Policy", link: "/privacy-policy" },
              { name: "Gallery", link: "/gallery" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white"
                onClick={() => navigate(item.link)}
              >
                → {item.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Help */}
        <motion.div variants={fadeUp}>
          <h4 className="text-[20px] mb-5">Get Help</h4>
          <ul className="space-y-3 text-gray">
            {[
              { name: "FAQs", link: "/faqs" },
              { name: "Terms & Conditions", link: "/privacy-policy" },
              { name: "Privacy Policy", link: "/privacy-policy" },
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white"
                onClick={() => navigate(item.link)}
              >
                → {item.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gallery */}
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <h4 className="text-[20px] mb-5">Gallery</h4>

          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                whileHover={{ scale: 1.08 }}
                className="w-[92px] h-[92px] rounded-lg object-cover"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/25 text-center py-4 text-sm text-gray">
        © 2025 TTC. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;