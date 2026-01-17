import React from 'react'
import { HeroSection } from '../../components/UI'
import BlogSection from '../../components/Blog/BlogSection'

const BlogPage = () => {
  return (
     <main className="pt-0">
      {/* <HeroSection title="Gallery" tagline="Gallery" rightImage={aboutGroupImg} /> */}
      <HeroSection
        title="Determing Company Budget Can be Frustrating."
        tag="Blogs Details"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <div className="container">
       <BlogSection/>
        
      </div>
    </main>
  )
}

export default BlogPage