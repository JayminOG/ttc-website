import { Plus, Minus } from "lucide-react";
import { Button, TitleHeading } from "../../components/UI";
import { useState } from "react";

const FAQSection = ({ faqData = [], buttonText }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white py-14 flex flex-col items-center px-3 md:px-0">
      <TitleHeading
        tag="FAQs"
        heading="Frequently Asked Questions"
        align="center"
        text="text-black"
      />

      {/* FAQ List */}
      <div className="w-full max-w-4xl flex flex-col gap-4 mt-10">
        {faqData.map((item, i) => (
          <button
            key={i}
            onClick={() => toggleFAQ(i)}
            className={`w-full text-left rounded-xl transition-all duration-300 p-5 relative
            ${
              openIndex === i
                ? "border border-[#BA0001] shadow-[0px_0px_40px_0px_rgba(186,0,1,0.25)]"
                : "bg-white border border-gray-300 hover:border-black"
            } `}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="sm:text-md md:text-[20px] sm:text-md font-semibold text-[#000]">
                {item.question}
              </h3>

              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full
                transition-all duration-300 border 
                ${
                  openIndex === i
                    ? "bg-[#BA0001] text-white border-[#BA0001]"
                    : "border-gray-400 text-black"
                }`}
              >
                {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 text-[16px] text-gray-600
              ${openIndex === i ? "max-h-[300px] mt-3" : "max-h-0"}`}
            >
              {item.answer}
            </div>
          </button>
        ))}
      </div>

      <div className="pt-5">
        <Button
          text={buttonText}
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </section>
  );
};

export default FAQSection;
