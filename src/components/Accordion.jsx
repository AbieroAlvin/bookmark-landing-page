import { useState } from "react";
import accordion from "../data/accordion";
import arrow from "../assets/images/icon-arrow.svg";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto md:my-24 flex items-center justify-center flex-col">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-2xl font-semibold"> Frequently Asked Questions</h1>
        <p className="w-3/4 text-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      {/*Accordion  */}
      <div className="flex flex-col max-w-[600px] items-center md:my-24 my-8 gap-4">
        {accordion.map((section, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div
              onClick={() => handleClick(index)}
              className={`${
                activeIndex === index
                  ? "bg-purple-600 p-2 rounded-md duration-500 ease-in text-white font-semibold"
                  : "bg-white p-2 rounded-md"
              } cursor-pointer flex items-center justify-between w-[400px]`}
            >
              {section.heading}
              <div className="text-xl">
                {activeIndex === index ? <span>-</span> : <span>+</span>}
              </div>
            </div>
            {activeIndex === index && (
              <div
                className={`${
                  activeIndex === index
                    ? "ease-out duration-500"
                    : "ease-out duration-500"
                } text-center bg-purple-400 rounded-md mt-2 p-2`}
              >
                {section.text}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* button */}
      <button className="bg-blue-600 px-4 py-2 text-white shadow-lg rounded-lg">
        More Info
      </button>
    </div>
  );
};

export default Accordion;
