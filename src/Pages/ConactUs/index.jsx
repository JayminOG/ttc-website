import React from 'react'
import { HeroSection } from '../../components/UI'
import ContactForm from '../../components/ContactUs/ContactForm'
import TestimonialsSlider from '../../components/Home/TestimonialsSlider'
import LatestBlogsSection from '../../components/Home/LatestBlogsSection'

const ContactUsPage = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Contact the Coating Specialists"
        tag="Contact Us"
        description="Ready to elevate your product's performance? Whether you need a custom formulation, a technical consultation, or a bulk quote, our team is ready to assist. Reach out today and let's start the conversation."
      />
      <div className="container">
        <ContactForm />
      </div>
      <TestimonialsSlider />
      <div className="container">
        <LatestBlogsSection />
      </div>
    </main>
  )
}

export default ContactUsPage