import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../components/Blog/blogData";

import authorImage1 from "../../../public/Home/authorImage1.png";
import comment from "../../../public/Home/comment.png";
import calander from "../../../public/Blog/calander.png";

import Blog1 from "../../../public/Blog/blog1.png";
import Blog2 from "../../../public/Blog/blog2.png";
import Blog3 from "../../../public/Blog/blog3.png";
import Blog4 from "../../../public/Blog/blog4.png";
import Blog5 from "../../../public/Blog/blog5.png";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  // Handle invalid blog ID
  if (!blog) {
    return (
      <div className="py-20 text-center text-red-500 text-lg">
        Blog not found!
      </div>
    );
  }

  const recentBlogs = [
    { img: Blog1, date: "08 Feb, 21", title: blog.title },
    { img: Blog2, date: "08 Feb, 21", title: blog.title },
    { img: Blog3, date: "08 Feb, 21", title: blog.title },
    { img: Blog4, date: "08 Feb, 21", title: blog.title },
    { img: Blog5, date: "08 Feb, 21", title: blog.title },
  ];

  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold opacity-90 mb-6 md:mb-12 leading-snug">
          {blog.title}
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="md:col-span-2 w-full">
            {/* Image */}
            <img
              src={blog.img}
              alt="Main Blog"
              className="rounded-2xl w-full object-cover max-h-[350px] sm:max-h-[500px]"
            />

            {/* Info Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-gray-700 text-sm">
              {/* Author */}
              <div className="flex items-center gap-2">
                <img src={authorImage1} className="w-8 h-8 rounded-full" />
                <span className="font-medium">{blog.author}</span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-2">
                <img src={comment} className="w-5 h-5" />
                <span>{blog.comments}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <img src={calander} className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Description */}
            <h1 className="text-black text-xl md:text-2xl font-semibold leading-tight mt-5">
              {blog.title}
            </h1>
            <p className="pt-3 text-gray-600 leading-relaxed text-base md:text-lg">
              {blog.description}
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-1">
            <h4 className="text-gray-700 text-lg font-semibold mb-4">
              Recently Blogs
            </h4>

            <div className="flex flex-col gap-4">
              {recentBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-3  hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={blog.img}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-gray-500 text-sm">{blog.date}</p>
                    <h5 className="text-black font-semibold leading-tight">
                      {blog.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
