import { useNavigate } from "react-router-dom";
import { blogData } from "./blogData";
import authorImg from "../../../public/Home/authorImage1.png";
// import authorImg from "../../../public/Home/authorImage1.png";
// import authorImg from "../../../public/Home/authorImage1.png";
import comment from "../../../public/Home/comment.png";
import { Button, TitleHeading } from "../UI";

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 w-full bg-white flex justify-center">
      <div className="max-w-7xl w-full px-6">
        <div className="text-center mb-14">
          <TitleHeading
            tag="New"
            heading="Our Latest's Blogs"
            align="center"
            text="text-black"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/blog/${item.id}`)}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 
              hover:border-red-600 hover:shadow-xl transition-all duration-300 
              hover:-translate-y-2 cursor-pointer group overflow-hidden p-5"
            >
              <img
                src={item.img}
                alt="blog-img"
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              <div className="pt-3">
                <p className="text-gray-500 text-sm">{item.date}</p>

                <h3
                  className="text-[20px] font-bold text-black mt-3 leading-snug 
                group-hover:text-red-600 transition-colors duration-300"
                >
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-gray-600 text-sm mt-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.authorImg}
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                    <span>{item.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={comment} alt="comment" className="w-5" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default BlogSection;
