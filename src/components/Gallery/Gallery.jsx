import React from "react";
import galleryImage1 from "../../../public/gallery/galleryImage1.png";
import galleryImage2 from "../../../public/gallery/galleryImage2.png";
import galleryImage3 from "../../../public/gallery/galleryImage3.png";
import galleryImage4 from "../../../public/gallery/galleryImage4.png";
import galleryImage5 from "../../../public/gallery/galleryImage5.png";
import galleryImage6 from "../../../public/gallery/galleryImage6.png";
import galleryImage7 from "../../../public/gallery/galleryImage7.png";
import galleryImage8 from "../../../public/gallery/galleryImage8.png";
import galleryImage9 from "../../../public/gallery/galleryImage9.png";
import galleryImage10 from "../../../public/gallery/galleryImage10.png";
import galleryImage11 from "../../../public/gallery/galleryImage11.png";
import galleryImage12 from "../../../public/gallery/galleryImage12.png";
import galleryImage13 from "../../../public/gallery/galleryImage13.png";
import TitleHeading from "../UI/TitleHeading";
import { Button } from "../UI";

const galleryImages = [
  { id: 1, img: galleryImage8, alt: "Gallery Image 1" }, // tall left
  { id: 2, img: galleryImage9, alt: "Gallery Image 2" }, // wide top
  { id: 3, img: galleryImage10, alt: "Gallery Image 3" }, // normal
  { id: 4, img: galleryImage11, alt: "Gallery Image 4" }, // tall right
  { id: 5, img: galleryImage13, alt: "Gallery Image 5" }, // wide bottom
  { id: 6, img: galleryImage12, alt: "Gallery Image 6" }, // normal
];

const Gallery = () => {
  return (
    <section className="bg-white py-16 pb-28 lg:pb-20">
      <div className="mx-auto container">
        {/* Section Title */}
        <TitleHeading
          tag="Gallery"
          heading="Surface Finishes Gallery"
          align="center"
          text="text-black"
        />

        {/* Masonry Gallery Grid */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4">
              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage1}
                  className="w-full h-[180px] sm:h-[240px] md:h-[330px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery1"
                />
              </div>

              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage7}
                  className="w-full h-[180px] sm:h-[240px] md:h-[330px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery2"
                />
              </div>
            </div>

            {/* CENTER COLUMN */}
            <div className="flex flex-col gap-4">
              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage2}
                  className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery3"
                />
              </div>

              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage4}
                  className="w-full h-[200px] sm:h-[250px] md:h-[200px] lg:h-[340px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery4"
                />
              </div>

              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage6}
                  className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery5"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage3}
                  className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery6"
                />
              </div>

              <div className="group overflow-hidden rounded-xl">
                <img
                  src={galleryImage5}
                  className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="gallery7"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-7 lg:hidden">
            <div className="group overflow-hidden rounded-xl">
              <img
                src={galleryImage6}
                className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                alt="gallery6"
              />
            </div>

            <div className="group overflow-hidden rounded-xl">
              <img
                src={galleryImage5}
                className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                alt="gallery7"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[260px] md:auto-rows-[300px] lg:auto-rows-[340px]">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-lg cursor-pointer 
        ${index === 0 ? "md:row-span-2" : ""}        /* Tall left image */
        ${index === 1 ? "md:col-span-2" : ""}        /* Wide top-right image */
        ${index === 2 ? "" : ""}                     /* Normal */
        ${index === 3 ? "md:row-span-2" : ""}        /* Tall right image */
        ${index === 4 ? " " : ""}        /* Wide bottom-left image */
        ${index === 5 ? "" : ""}                     /* Normal */
      `}
              >
                {/* Gallery Image */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="my-8 sm:mt-10 flex justify-center text-center">
          <Button text="View More" className="text-center" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
