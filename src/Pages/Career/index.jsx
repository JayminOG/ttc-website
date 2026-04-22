import React from 'react'
import { HeroSection } from '../../components/UI'
import ContactForm from '../../components/ContactUs/ContactForm'
import TestimonialsSlider from '../../components/Home/TestimonialsSlider'
import LatestBlogsSection from '../../components/Home/LatestBlogsSection'
const Heroimg = "/contact/contact-hero.png";
const mobileimage = "/contact/contact-hero-mobile.png";

const CareerPage = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Career Opportunities at TTC"
        tag="Career"
        description="Your next opportunity starts here. If you're passionate, curious, and ready to grow, we want you on our team. Reach out or explore our openings—we’re excited to meet you."
        image={Heroimg}
        mobileImage={mobileimage}
      />
      <div className="container">
        <ContactForm />
      </div>
      {/* <TestimonialsSlider /> */}
      {/* <div className="container"> */}
        {/* <LatestBlogsSection /> */}
      {/* </div> */}
    </main>
  )
}

export default CareerPage