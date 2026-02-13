import React from "react";
import { HeroSection } from "../../components/UI";
import AboutIntroSection from "../../components/AboutUs/AboutIntroSection";
import ConnectWithTeam from "../../components/AboutUs/ConnectWithTeam";
import WhyChooseUs from "../../components/AboutUs/WhyChooseUs";
import MissionVisionSection from "../../components/AboutUs/MissionVisionSection";
import CoreValues from "../../components/AboutUs/CoreValues";

const AboutUsPage = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="The Journey of Thousand Miles Begins With One Steps"
        tag="About Us"
        description="TTC is a dynamic innovation hub specializing in next-generation coating solutions. Although we operate with the agility of a modern startup, our foundation is built on deep industry insight and a vision to redefine performance standards. We specialize in high-performance non-stick and ceramic technologies that improve the quality and longevity of cookware, bakeware, and electrical appliances."
      />
      <div className="container">
        <AboutIntroSection hidden={true} />
      </div>
      {/* <MissionVisionSection /> */}
      {/* <CoreValues /> */}
      <ConnectWithTeam />
      <div className="container">
        {/* <WhyChooseUs /> */}
      </div>
    </main>
  );
};

export default AboutUsPage;
