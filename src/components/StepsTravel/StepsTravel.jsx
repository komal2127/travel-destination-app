import React from "react";

// ✅ Correct imports from src/assets
import Choosingdestination from "../../assets/Choosingdestination.png";
import Makingpayment from "../../assets/Makingpayment.png";
import Traveling from "../../assets/Traveling.png";

const steps = [
  {
    id: "01",
    title: "Choose Destination",
    description:
      "All you have to do is, first select your preferred destination and proceed.",
    iconBg: "#45869D",
    image: Choosingdestination,
    gradient: "from-[#3AB0C3] to-[#5DC9E2]",
  },
  {
    id: "02",
    title: "Make Payment",
    description:
      "You are important to us. We pay attention to the quality of every service we provide to you.",
    iconBg: "#CE8594",
    image: Makingpayment,
    gradient: "from-[#E98BA3] to-[#F6A9B9]",
  },
  {
    id: "03",
    title: "Ready For Travelling",
    description:
      "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
    iconBg: "#047881",
    image: Traveling,
    gradient: "from-[#0B9B91] to-[#17C8BA]",
  },
];

const StepsTravel = () => {
  return (
    <section className="py-20 px-6 relative bg-[#CFF0F5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-end gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-[90%] md:w-[45%] lg:w-[30%] 
                bg-gradient-to-r ${step.gradient} text-white rounded-3xl 
                p-8 pt-12 shadow-xl transition-transform duration-500 
                hover:scale-105 overflow-hidden`}
              style={{
                marginTop:
                  index === 0 ? "40px" : index === 1 ? "10px" : "-30px",
                opacity: 0.95 - index * 0.05,
                zIndex: 10 - index,
              }}
            >
              {/* Fade effect inside card (bottom overlay) */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"></div>

              {/* Icon Circle */}
              <div className="flex justify-center mb-6 relative z-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: step.iconBg }}
                >
                  <div className="w-16 h-16 bg-white rounded-full shadow-md"></div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center mb-6 relative z-10">
                <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
                <p className="text-sm opacity-90">{step.description}</p>
              </div>

              {/* Image and Number */}
              <div className="flex items-end justify-between mt-4 relative z-10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-44 h-auto object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-6xl font-black text-white opacity-80 drop-shadow-md">
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsTravel;
