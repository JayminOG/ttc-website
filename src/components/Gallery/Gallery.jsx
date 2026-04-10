import React from "react";
import TitleHeading from "../UI/TitleHeading";
import { Button } from "../UI";

const galleryImages = [
  { id: 1, img: "/gallery/1.png", alt: "Gallery Image 1" },
  { id: 2, img: "/gallery/2.png", alt: "Gallery Image 2" },
  { id: 3, img: "/gallery/3.png", alt: "Gallery Image 3" },
  { id: 4, img: "/gallery/4.png", alt: "Gallery Image 4" },
  { id: 5, img: "/gallery/5.png", alt: "Gallery Image 5" },
  { id: 6, img: "/gallery/6.png", alt: "Gallery Image 6" },
  { id: 7, img: "/gallery/7.png", alt: "Gallery Image 7" },
  { id: 8, img: "/gallery/8.png", alt: "Gallery Image 8" },
  { id: 9, img: "/gallery/9.png", alt: "Gallery Image 9" },
  { id: 10, img: "/gallery/10.png", alt: "Gallery Image 10" },
  { id: 11, img: "/gallery/11.png", alt: "Gallery Image 11" },
  { id: 12, img: "/gallery/12.png", alt: "Gallery Image 12" },
  { id: 13, img: "/gallery/13.png", alt: "Gallery Image 13" },
  { id: 14, img: "/gallery/14.png", alt: "Gallery Image 14" },
  { id: 15, img: "/gallery/15.png", alt: "Gallery Image 15" },
  { id: 16, img: "/gallery/16.png", alt: "Gallery Image 16" },
  { id: 17, img: "/gallery/17.png", alt: "Gallery Image 17" },
  { id: 18, img: "/gallery/18.png", alt: "Gallery Image 18" },
  { id: 19, img: "/gallery/19.png", alt: "Gallery Image 19" },
];

const Gallery = () => {
  return (
    <section className="bg-white py-16 pb-24">
      <div className="container mx-auto px-4">
        <TitleHeading
          tag="Gallery"
          heading="Surface Finishes Gallery"
          align="center"
          text="text-black"
        />

        {/* Masonry Layout */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid overflow-hidden rounded-xl bg-gray-100 shadow-sm"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 block"
              />
            </div>
          ))}
        </div>

        {/* <div className="my-8 sm:mt-10 flex justify-center text-center">
          <Button text="View More" className="text-center" />
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;