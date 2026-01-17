import React, { useState } from "react";

import { HeroSection, } from "../../components/UI";
import PrivacyPolicySection from "../../components/UI/PrivacyPolicySection";


const PrivacyPolicyPage = () => {

  return (
    <main className="pt-0">
      <HeroSection
        title="Privacy Policy & Data Protection"
        tag="Privacy & Policy"
        description="At TTC, we value the trust you place in us. This policy outlines how we collect, use, and protect your personal and business information to ensure transparency and security in all our digital interactions."
      />
      <PrivacyPolicySection />
    </main>
  );
};

export default PrivacyPolicyPage;
