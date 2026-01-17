import React from "react";
import { Button, TitleHeading } from "../UI";
import { motion } from "framer-motion";

// Icons
import Whatsapp from "../../../public/contact/whatsapp.png";
import Mail from "../../../public/social/mail.png";
import Map from "../../../public/social/map.png";

import FB from "../../../public/contact/fb.png";
import LinkedIn from "../../../public/contact/linkedin.png";
import Google from "../../../public/contact/google.png";
import Twitter from "../../../public/contact/twitter.png";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactForm = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center py-10">
      <div>
        <TitleHeading
          tag="Contact Us"
          heading="Get In Touch With Us"
          align="center"
          text="text-black"
        />

        {/* Outer Card */}
        <div className="w-full bg-white shadow-2xl rounded-3xl p-4 md:p-8 mt-8 flex flex-col lg:flex-row gap-10">

          {/* LEFT PANEL */}
          <div
            className="w-full lg:w-[40%] rounded-2xl text-white p-8 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, #1E1A1B 0%, #302628 50%, #49383A 100%)",
            }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Say something to start a conversation. We are here to answer your questions and discuss your coating needs.
              </p>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-6">
                <img src={Whatsapp} className="w-8 p-2 bg-white rounded-full" alt="phone" />
                <p className="text-gray-200">+91 98XXX XXXXX</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-6">
                <img src={Mail} className="w-8 p-2 bg-white rounded-full" alt="email" />
                <p className="text-gray-200">info@ttccoatings.com</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 mb-6">
                <img src={Map} className="w-8 p-2 bg-white rounded-full" alt="location" />
                <p className="text-gray-200 leading-tight">
                  123 Industrial Estate, Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Social Icons Animated */}
            <motion.div
              className="flex items-center gap-4 mt-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[FB, LinkedIn, Google, Twitter].map((icon, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.15,
                    rotate: 2,
                    transition: { duration: 0.25 },
                  }}
                  className="w-10 h-10 shadow bg-gray-900  rounded-full flex justify-center items-center cursor-pointer transition-all duration-300"
                >
                  <img src={icon} className="" />
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-black text-md font-semibold mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-black text-md font-semibold mb-2">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-black text-md font-semibold mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-black text-md font-semibold mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col sm:col-span-2">
                <label className="text-black text-md font-semibold mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Enter Message"
                  rows={4}
                  className="bg-white border border-gray-300 rounded-2xl px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none resize-none"
                />
              </div>
            </form>

            {/* Submit Button */}
            <div className="flex mt-8 justify-center">
              <Button
                text="Submit"
                onClick={() => (window.location.href = "/")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
