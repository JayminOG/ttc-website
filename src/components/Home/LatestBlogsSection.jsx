import React from "react";

import BlogImage1 from "../../../public/Home/BlogImage1.jpg";
import BlogImage2 from "../../../public/Home/BlogImage2.jpg";
import BlogImage3 from "../../../public/Home/BlogImage3.jpg";

// Local Author Images
import author1 from "../../../public/Home/authorImage1.png";
import author2 from "../../../public/Home/authorImage1.png";
import author3 from "../../../public/Home/authorImage1.png";
import comment from "../../../public/Home/comment.png";
import { Button, TitleHeading } from "../UI";

const blogData = [
  {
    id: 1,
    img: BlogImage1,
    authorImg: author1,
    date: "08 Feb, 21",
    title: "Determing Company Budget Can be Frustrating.",
    author: "Souja Flora",
    comments: 56,
  },
  {
    id: 2,
    img: BlogImage2,
    authorImg: author2,
    date: "08 Feb, 21",
    title: "Determing Company Budget Can be Frustrating.",
    author: "Souja Flora",
    comments: 56,
  },
  {
    id: 3,
    img: BlogImage3,
    authorImg: author3,
    date: "08 Feb, 21",
    title: "Determing Company Budget Can be Frustrating.",
    author: "Souja Flora",
    comments: 56,
  },
];

const LatestBlogsSection = () => {
  return (
    <section className="py-20 w-full flex justify-center">
      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <TitleHeading
            tag="New"
            heading="Our Latest's Blogs"
            align="center"
            text="text-black"
          />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-gray hover:border-red-600 
               hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer p-5 group"
            >
              {/* Blog Thumbnail */}
              <img
                src={item.img}
                alt="blog-img"
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              <div className="pt-3">
                <p className="text-gray text-sm">{item.date}</p>

                {/* 👇 Title turns red on hover */}
                <h3 className="text-[20px] font-bold text-black mt-3 leading-snug group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Footer: Author + Comments */}
                <div className="flex items-center justify-between text-gray text-sm mt-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.authorImg}
                      className="w-8 h-8 rounded-full border object-cover"
                      alt="author-img"
                    />
                    <span>{item.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      src={comment}
                      alt="comment"
                      className="object-cover w-5"
                    />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Button
            text="View More"
            onClick={() => (window.location.href = "/")}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
