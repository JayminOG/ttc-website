import React from "react";

import { ScrollToTop } from "../../components/UI";
import AboutIntroSection from "../../components/AboutUs/AboutIntroSection";
import WhyChooseUs from "../../components/AboutUs/WhyChooseUs";
import BrandLogoSection from "../../components/AboutUs/BrandLogoSection";
import ConnectWithTeam from "../../components/AboutUs/ConnectWithTeam";
import LatestBlogsSection from "../../components/Home/LatestBlogsSection";
import ProductsSection from "../../components/Home/ProductsSection";
import FAQSection from "../../components/Faq/FAQSection";
import TestimonialsSlider from "../../components/Home/TestimonialsSlider";
import { Hero } from "../../components/Home";

const Home = () => {
  const faqData = [
    {
      question: "What is the difference between PROTECTIX™ and SHIELDON™ non-stick coatings?",
      answer: "PROTECTIX™ is our reliable 2-layer system designed for cost-effective, everyday performance. SHIELDON™ is a premium 3-layer system reinforced with advanced fluoropolymers for superior abrasion resistance and longer durability, making it ideal for demanding cookware.",
    },
    {
      question: "Are CERAGREEN™ ceramic coatings safe for health and the environment?",
      answer: "Yes. CERAGREEN™ is a next-generation sol-gel ceramic coating that is 100% PFAS-free and non-toxic. It is developed using natural minerals and safe nano-particle technology, meeting modern health and sustainability standards.",
    },
    {
      question: "Do you offer coatings for industrial applications beyond cookware?",
      answer: "Absolutely. We provide specialized industrial coatings, including NextG-UV (UV/LED curable) for wood and plastics, as well as low-friction, anti-corrosion, and heat-resistant solutions for automotive and defense sectors.",
    },
    {
      question: "How durable are your exterior and handle coatings?",
      answer: "Our exterior coatings are engineered to withstand intense cooking heat without discoloration. Our soft-touch handle coatings are dishwasher-safe, highly durable, and provide excellent adhesion to Bakelite, ABS, and metal.",
    },
    {
      question: "Can TTC develop customized coating formulations?",
      answer: "Yes, we specialize in custom-engineered solutions. Our technical team works closely with clients to tailor coatings for specific substrates, performance requirements, and aesthetic finishes.",
    },
  ];

  return (
    <main>
      <Hero />

      <div className="container">
        <AboutIntroSection hidden={false} />
      </div>

      <ProductsSection />

      <div className="container hidden">
        <WhyChooseUs />
      </div>
      <div className="hidden">
        <TestimonialsSlider className="hidden" />
      </div>

      <BrandLogoSection />
      <div className="container">
        <FAQSection faqData={faqData} buttonText="View More" />
      </div>
      <ConnectWithTeam />

      <div className="container">
        <LatestBlogsSection />
      </div>

      <ScrollToTop />
    </main>
  );
};

export default Home;
