import React from "react";
import { motion } from "framer-motion";

const CoatingCard = ({
  number,
  image,
  title,
  description,
  tableData,
  reverse,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-white border rounded-[32px] p-6 md:p-10 mb-16 relative"
    >
      {/* Number Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`absolute -top-6 ${
          reverse ? "right-6" : "left-6"
        } bg-white px-5 py-1 rounded-md text-4xl font-bold text-gray-400`}
      >
        {number < 10 ? `0${number}` : number}
      </motion.div>

      {/* MAIN WRAPPER */}
      <div
        className={`flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 w-full"
        >
          <div className="md:p-4">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {title}
          </h2>

          <p className="text-gray leading-relaxed mb-6">
            {description}
          </p>

          {/* TABLE */}
          {tableData && tableData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="overflow-x-auto border rounded-xl"
            >
              <table className="w-full text-left rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#F4F4F7] text-black">
                    <th className="p-3 font-semibold">Name</th>
                    <th className="p-3 font-semibold">Brand Name</th>
                    <th className="p-3 font-semibold">Coating System</th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + idx * 0.1,
                        ease: "easeOut",
                      }}
                      className="border-b last:border-none"
                    >
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.brand}</td>
                      <td className="p-3">{row.coat}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoatingCard;
