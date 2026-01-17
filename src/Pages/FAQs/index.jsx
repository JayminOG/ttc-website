import React, { useState } from "react";

import { HeroSection, } from "../../components/UI";
import FAQSection from "../../components/Faq/FAQSection";


const FAQs = () => {
  const faqData = [
    {
      question: "What industries do you specialize in?",
      answer:
        "TTC provides advanced surface solutions across a wide spectrum of sectors. Our core expertise lies in Cookware and Bakeware (non-stick and ceramic), Electrical Appliances (heating elements), and Industrial Applications (automotive, fasteners, and heavy machinery).",
    },
    {
      question: "What is the difference between PROTECTIX™ and SHIELDON™?",
      answer:
        "PROTECTIX™ is our value-driven 2-layer system, designed for reliable everyday performance and cost efficiency. SHIELDON™ is our premium 3-layer system, reinforced with specialized resins (and nano-metals in the " + " version) for superior abrasion resistance, durability, and professional-grade cooking.",
    },
    {
      question: "Do you offer PFAS-free coating options?",
      answer:
        "Yes. We are committed to sustainability and health. Our CERAGREEN™ line is a next-generation Sol-Gel ceramic coating that is 100% PFAS-free and non-toxic, offering excellent non-stick performance without the use of 'forever chemicals.'",
    },
    {
      question: "Can your coatings withstand high temperatures?",
      answer:
        "Absolutely. Our cookware coatings are designed to handle standard cooking temperatures safely. For industrial and automotive use (such as mufflers and exhaust systems), we offer specialized High-Heat Coatings engineered to withstand extreme thermal stress without degrading or peeling.",
    },
    {
      question: "What substrates can your coatings be applied to?",
      answer:
        "Our systems are highly versatile. We have formulations compatible with Aluminium (Pressed, Forged, Cast), Stainless Steel, Carbon Steel, as well as Plastics (ABS, PC), Wood, and Glass for our UV and decorative lines.",
    },
    {
      question: "Can I customize the color and finish of the coatings?",
      answer:
        "Yes. We understand that aesthetics sell. We offer a wide range of custom colors and specialty finishes, including metallic effects, high-gloss, super-matte, and our luxurious Soft-Touch coatings for handles and grips.",
    },
    {
      question: "Are your coatings safe for food contact?",
      answer:
        "Safety is our non-negotiable priority. All our food-contact coatings comply with strict international regulations, including FDA (USA), LFGB (Germany), and ROHS standards. We regularly test to ensure they are free from harmful substances like PFOA and PFOS.",
    },
    {
      question: "What is UV/LED Curing and why should I use it?",
      answer:
        "UV/LED curing (our NextG-UV line) is a rapid-drying technology that cures coatings instantly using light. This significantly speeds up production lines, reduces energy consumption, and lowers VOC emissions compared to traditional oven-dried coatings.",
    },

  ];
  return (
    <main className="pt-0">
      <HeroSection
        title="Frequently Ask Questions"
        tag="FAQs"
        description="We believe transparency builds trust. Whether you are a manufacturer looking for technical specs or a brand seeking the perfect finish, we have answered the most common questions about our coatings, processes, and safety standards here."
      />
      <FAQSection
        faqData={faqData}
        buttonText="Load More"
      />
    </main>
  );
};

export default FAQs;
