import React, { useState } from "react";
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

const CareerForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error"

  const socialLinks = [
    { icon: LinkedIn, link: "https://www.linkedin.com/company/t-t-c-pvt-ltd/posts/?feedView=all" },
    { icon: FB, link: "https://www.facebook.com/profile.php?id=61587675127752" },
    // { icon: Google, link: "https://g.co/yourbusiness" },
    // { icon: Twitter, link: "https://twitter.com/yourhandle" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, resume: file }));
    } else {
      setFileName("No file chosen");
      setFormData((prev) => ({ ...prev, resume: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const data = new FormData();
      data.append("First Name", formData.firstName);
      data.append("Last Name", formData.lastName);
      data.append("Phone Number", formData.phone);
      data.append("Email", formData.email);
      data.append("Message", formData.message);
      if (formData.resume) {
        data.append("Resume", formData.resume);
      }

      // FormSubmit hidden config fields
      data.append("_subject", "New Career Form Submission - TTC");
      data.append("_captcha", "false");
      data.append("_template", "table");

      const response = await fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          resume: null,
        });
        setFileName("No file chosen");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white flex flex-col items-center py-10">
      <div>
        <TitleHeading
          tag="Career Form"
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
                Start your journey with us. We're excited to learn more about your skills, experience, and career aspirations. Reach out to explore opportunities and become a part of our growing team.
              </p>

              {/* Phone */}
              {/* <div className="flex items-center gap-3 mb-6">
                <img src={Whatsapp} className="w-8 p-2 bg-white rounded-full" alt="phone" />
                <p className="text-gray-200">+91 63967 95374</p>
              </div> */}

              {/* Email */}
              <div className="flex items-center gap-3 mb-6">
                <img src={Mail} className="w-8 p-2 bg-white rounded-full" alt="email" />
                <p className="text-gray-200">info@ttcpl.com</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-6">
                <img src={Mail} className="w-8 p-2 bg-white rounded-full" alt="email" />
                <p className="text-gray-200">sales@ttcpl.com</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 mb-6">
                <img src={Map} className="w-8 p-2 bg-white rounded-full" alt="location" />
                <p className="text-gray-200 leading-tight">
                  TINT TECH COATINGS PVT. LTD., B/H Prakash Petrol Pump, NH-08, Jetalpur, Gujarat 382426.
                </p>
              </div>
            </div>

            {/* Social Icons with Links */}
            <motion.div
              className="flex items-center gap-4 mt-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
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
                    transition: { duration: 0.25 },
                  }}
                  className="w-10 h-10 shadow bg-gray-900 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300"
                >
                  <img src={item.icon} alt="social" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >

              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-black text-md font-semibold mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Email"
                  className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
                />
              </div>

              {/* Resume Upload */}
              <div className="flex flex-col sm:col-span-2">
                <label className="text-black text-md font-semibold mb-2">
                  Upload Resume<span className="text-red-500">*</span>
                </label>
                <label className="flex items-center gap-4 border border-gray-300 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#A42323] focus-within:ring-2 focus-within:ring-[#A42323] transition-all duration-200">
                  <span className="bg-[#A42323] text-white text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                    Choose File
                  </span>
                  <span className="text-gray-400 text-sm truncate">
                    {fileName}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-gray-400 text-xs mt-1 ml-1">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              {/* Message */}
              <div className="flex flex-col sm:col-span-2">
                <label className="text-black text-md font-semibold mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter Message"
                  rows={4}
                  className="bg-white border border-gray-300 rounded-2xl px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none resize-none"
                />
              </div>

              {/* Success / Error Message */}
              {submitStatus === "success" && (
                <div className="sm:col-span-2 bg-green-50 border border-green-300 text-green-700 rounded-2xl px-4 py-3 text-sm text-center">
                  ✅ Your application has been submitted successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="sm:col-span-2 bg-red-50 border border-red-300 text-red-700 rounded-2xl px-4 py-3 text-sm text-center">
                  ❌ Something went wrong. Please try again or email us directly at info@ttcpl.com
                </div>
              )}

              {/* Submit Button */}
              <div className="sm:col-span-2 flex mt-2 justify-center">
                <Button
                  text={isSubmitting ? "Submitting..." : "Submit"}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                />
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;






// import React from "react";
// import { Button, TitleHeading } from "../UI";
// import { motion } from "framer-motion";

// // Icons
// import Whatsapp from "../../../public/contact/whatsapp.png";
// import Mail from "../../../public/social/mail.png";
// import Map from "../../../public/social/map.png";

// import FB from "../../../public/contact/fb.png";
// import LinkedIn from "../../../public/contact/linkedin.png";
// import Google from "../../../public/contact/google.png";
// import Twitter from "../../../public/contact/twitter.png";

// // Animation Variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.25 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 25 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const CareerForm = () => {
//   const socialLinks = [
//     { icon: LinkedIn, link: "https://www.linkedin.com/company/t-t-c-pvt-ltd/posts/?feedView=all" },
//     { icon: FB, link: "https://www.facebook.com/profile.php?id=61587675127752" },
//     // { icon: Google, link: "https://g.co/yourbusiness" },
//     // { icon: Twitter, link: "https://twitter.com/yourhandle" },
//   ];

//   return (
//     <section className="w-full bg-white flex flex-col items-center py-10">
//       <div>
//         <TitleHeading
//           tag="Career Form"
//           heading="Get In Touch With Us"
//           align="center"
//           text="text-black"
//         />

//         {/* Outer Card */}
//         <div className="w-full bg-white shadow-2xl rounded-3xl p-4 md:p-8 mt-8 flex flex-col lg:flex-row gap-10">

//           {/* LEFT PANEL */}
//           <div
//             className="w-full lg:w-[40%] rounded-2xl text-white p-8 flex flex-col justify-between"
//             style={{
//               background:
//                 "linear-gradient(135deg, #1E1A1B 0%, #302628 50%, #49383A 100%)",
//             }}
//           >
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
//               <p className="text-gray-300 mb-8">
//                Start your journey with us. We’re excited to learn more about your skills, experience, and career aspirations. Reach out to explore opportunities and become a part of our growing team.
//               </p>

//               {/* Phone */}
//               {/* <div className="flex items-center gap-3 mb-6">
//                 <img src={Whatsapp} className="w-8 p-2 bg-white rounded-full" alt="phone" />
//                 <p className="text-gray-200">+91 63967 95374</p>
//               </div> */}

//               {/* Email */}
//               <div className="flex items-center gap-3 mb-6">
//                 <img src={Mail} className="w-8 p-2 bg-white rounded-full" alt="email" />
//                 <p className="text-gray-200">info@ttcpl.com</p>
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3 mb-6">
//                 <img src={Mail} className="w-8 p-2 bg-white rounded-full" alt="email" />
//                 <p className="text-gray-200">sales@ttcpl.com</p>
//               </div>

//               {/* Location */}
//               <div className="flex items-center gap-3 mb-6">
//                 <img src={Map} className="w-8 p-2 bg-white rounded-full" alt="location" />
//                 <p className="text-gray-200 leading-tight">
//                   TINT TECH COATINGS PVT. LTD., B/H Prakash Petrol Pump, NH-08, Jetalpur, Gujarat 382426.
//                 </p>
//               </div>
//             </div>

//             {/* Social Icons with Links */}
//             <motion.div
//               className="flex items-center gap-4 mt-6"
//               variants={container}
//               initial="hidden"
//               animate="show"
//             >
//               {socialLinks.map((item, i) => (
//                 <motion.a
//                   key={i}
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variants={fadeUp}
//                   whileHover={{
//                     scale: 1.15,
//                     rotate: 2,
//                     transition: { duration: 0.25 },
//                   }}
//                   className="w-10 h-10 shadow bg-gray-900 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300"
//                 >
//                   <img src={item.icon} alt="social" />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="w-full lg:w-[60%] flex flex-col">
//             <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//               {/* First Name */}
//               <div className="flex flex-col">
//                 <label className="text-black text-md font-semibold mb-2">
//                   First Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter First Name"
//                   className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
//                 />
//               </div>

//               {/* Last Name */}
//               <div className="flex flex-col">
//                 <label className="text-black text-md font-semibold mb-2">
//                   Last Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Last Name"
//                   className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
//                 />
//               </div>

//               {/* Phone */}
//               <div className="flex flex-col">
//                 <label className="text-black text-md font-semibold mb-2">
//                   Phone Number<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Phone Number"
//                   className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div className="flex flex-col">
//                 <label className="text-black text-md font-semibold mb-2">
//                   Email<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   className="bg-white border border-gray-300 rounded-full px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none"
//                 />
//               </div>

//               {/* Message */}
//               <div className="flex flex-col sm:col-span-2">
//                 <label className="text-black text-md font-semibold mb-2">
//                   Message<span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   placeholder="Enter Message"
//                   rows={4}
//                   className="bg-white border border-gray-300 rounded-2xl px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[#A42323] outline-none resize-none"
//                 />
//               </div>
//             </form>

//             {/* Submit Button */}
//             <div className="flex mt-8 justify-center">
//               <Button
//                 text="Submit"
//                 onClick={() => (window.location.href = "/")}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerForm;
