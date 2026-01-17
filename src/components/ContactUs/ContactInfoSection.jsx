// src/components/ContactSection.jsx
import React from "react";
import ContactCard from "../UI/ContactCard";

const ContactInfoSection = () => {
  const contacts = [
    {
      title: "Greenage Industries",
      emails: ["info@greenageind.com", "sales@greenageind.com"],
      phones: ["+91 79 297 08677", "+91 - 99798 48853"],
      address:
        "Plot No 123, Road No 6, Phase I, Kathwada GIDC, Ahmedabad-382430. (Guj.)",
    },
    {
      title: "African Continent",
      emails: ["paresh@sel.co.ke"],
      phones: ["+254 727 374757", "+254 772 727374"],
      address:
        "402 Apricot Suites, 4th Parklands, Westlands P.O.Box 66829-00800 Nairobi, Kenya",
    },
    {
      title: "USA & Caribbean Region",
      emails: ["globalplast.trading@gmail.com"],
      phones: ["+1 (305) 298-5308"],
      address:
        "Global Plast And Trading, Inc 936SW 1ST #952, MIAMI, FLORIDA-33130. United States Of America.",
    },
    {
      title: "Middle East",
      emails: ["sales@ainglobal.com"],
      phones: ["+971 50 791 8853"],
      address:
        "Business Centre, 6th Floor, The Meydan Hotel Grandstand, Meydan Road, Nad Al Sheba, Dubai, UAE",
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactInfoSection;
