import React from "react";
import { Bell } from "lucide-react";
import bell2 from "../assets/bell.svg";

import { motion } from "framer-motion";

const FourthUi = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] px-4 md:px-8 py-16 md:py-25 max-w-[1536px] mx-auto ">
      {/* Card 1 - Light */}
      <div className="bg-gray-100 rounded-2xl shadow-md p-8 w-full max-w-sm text-center relative">
        <h2 className="text-lg font-bold mb-4 text-black">
          Lorem Ipsum is simply <br /> dummy text.
        </h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <button className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition">
          View More
        </button>
      </div>

      {/* Card 2 - Blue with Bell */}
      <div className="bg-sky-600 text-white rounded-2xl shadow-md p-8 w-full max-w-sm text-center relative">
        {/* Bell icon */}
        <motion.img
          src={bell2}
          alt="Bell"
          className="absolute -top-10 right-0.5 w-20 h-20 transform rotate-12 text-sky-600 rounded-full p-1"
          animate={{ rotate: [0, -20, 20, -15, 15, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
        />

        <h2 className="text-lg font-bold mb-4">
          Lorem Ipsum is simply <br /> dummy text.
        </h2>
        <p className="mb-6 text-sm leading-relaxed">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        {/* Button */}
        <button className="bg-white text-sky-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default FourthUi;