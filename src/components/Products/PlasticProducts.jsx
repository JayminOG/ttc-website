import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import { TitleHeading } from "../UI";

const PlasticProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "UV & LED Curable Topcoats",
      description: (
        <>
          UV & LED Curable Coatings represent a next-generation solution specifically engineered as a topcoat for a wide range of plastic surfaces. This innovative formulation delivers an ultra high-gloss finish, super matt finishes, outstanding surface leveling, and superior adhesion. Compared to conventional offerings in the market, TTC's coating sets a new benchmark in both aesthetic appeal and performance, making it the ideal choice for premium applications.
          <br />
          <br />
          Preferred plastic surfaces : ABS, PC, HIPS, PP*
          <br />
          Finishes : High Gloss & Matt
          <br />
          Application : Automotive Accessories, Helmets, Cosmetics caps & closers, Electrical & Home appliances.
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: false,
    },
    {
      number: 2,
      image: img1,
      title: "UV Basecoat & Topcoat for PVD (Aluminium Evaporation | Vacuum Metallizing)",
      description: (
        <>
          TTC’s new cutting-edge technology and the invaluable trust of Indian customers, has pioneered a revolution in the vacuum metallizing industry. Introducing our UV Curable Base Coat and UV Curable TopCoat innovations that set new benchmarks for exceptional quality and performance. Their durability, brilliance, and efficiency make them the ideal choice for modern industrial applications.
          <br />
          <br />
          Preferred plastic surfaces : ABS, PC, HIPS, PP*
          <br />
          Finishes : High Gloss & Matt 
          <br />
          Application : Cosmetics caps & closers, Electrical & Home appliances.
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: true,
    },
    {
      number: 3,
      image: img1,
      title: "UV & LED Coatings for Lighting Reflectors",
      description: (
        <>
          TTC UV & LED COATINGS New technology has led to the development of a UV curable base coat for reflectors a breakthrough that significantly reduces processing time compared to conventional methods, and enhancing cost efficiency. Engineered with precision and purpose, this innovative solution is specifically designed to meet the rigorous standards of the automotive industry. Tested across all quality parameters, our UV curable base coat has proven its excellence, delivering superior performance without compromise quality standard.
          <br />
          <br />
          Preferred plastic surfaces : BMC, ABS, PC
          <br />
          Application : Automotive headlamps and General lighting industries
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: false,
    },
    {
      number: 4,
      image: img1,
      title: "UV Curable & Thermal base Anti-Scratch Hard coat",
      description: (
        <>
          TTC’s coating technology backed by an advanced and experienced Research & Development team, has developed specialized thermal curing and radiation curing coatings for polycarbonate. These coatings offer exceptional transparency, outstanding anti-scratch performance, along with excellent anti-fog and anti-glare properties, making them ideal for high-performance applications.
          <br />
          <br />
          Preferred plastic surfaces : Poly Carbonate (PC)
          <br />
          Process : Spray, Dip and Flow
          <br />
          Application : Automotive headlamps, Helmet visor & Optical lances
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: true,
    },
    {
      number: 5,
      image: img1,
      title: "PU paint for plastic",
      description: (
        <>
          TTC, we bring you next-generation hybrid coatings developed with cutting-edge polyester and polyurethane technologies. Our coatings are custom-engineered to perfectly meet the rigorous testing standards of OEMs and specialized customer requirements.
          <br />
          <br />
          Discover a world of possibilities:
          <br />
          Tailor-made solutions for every application
          <br />
          Diverse range of effects and finishes to match any design vision
          <br />
          Vibrant, superior color options that combine stunning aesthetics with unmatched durability
          <br />
          Outstanding performance in real-world conditions
          <br />
          Preferred plastic surfaces : ABS, HIPS, PC & PP
        </>
      ),
    //   tableData: [
    //     { name: "Reduces torque variation & prevents seizing", brand: "PTFE-Based ultra-low friction", coat: "Excellent chemical and corrosion resistance" },
    //   ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="PLASTIC"
          align="center"
          text="text-black"
        />
      </div>

      {data.map((item, index) => (
        <CoatingCard key={index} {...item} />
      ))}
    </section>
  );
};

export default PlasticProducts;
