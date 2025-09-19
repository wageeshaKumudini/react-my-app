import React from "react";
import bene from "../assets/bene.svg";
import caspio from "../assets/caspio.svg";
import hypergrid from "../assets/hypergrid.svg";
import leo from "../assets/leo.svg";
import StarIcon from "../assets/star.svg";
import PaicIcon from "../assets/paic.svg";

const FifthUi= () => {
  return (
    <section className="overflow-hidden">
    {/* Trusted Companies Section */}
    <div className="mx-width">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[31px] justify-center items-center"></div>
      <h2 className="text-xl font-semibold mb-8 text-black text-center">
        You will be in good Company
      </h2>
      <div className="flex justify-center gap-4 md:gap-12 flex-wrap">
        <img src={bene} alt="beneshop" />
        <img src={caspio} alt="caspio" />
        <img src={hypergrid} alt="hypergrid" />
        <img src={leo} alt="leo trippi" />
      </div>
    </div>

      {/*  Star SVG Positioning */}
      <section className="py-12 ml-50 bg-white relative animate-bounce z-10 hidden md:block">
        {/* Left-bottom star */}
        <div className="absolute left-0 -bottom-10 z-20 rotate-12">
          <img src={StarIcon} alt="star icon" className="w-15 h-15" />
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="bg-sky-50 py-50 text-center px-4 relative">
        {/* paic.svg top-right */}
        
        <div className="absolute right-150 top-40 animate-spin z-5">
          <img src={PaicIcon} alt="paic icon" className="w-12 h-12" />
        </div>

        <p className="text-[25px] font-semibold leading-12 mb-6 text-black">
          Lorem Ipsum is simply dummy<br /> text of the printing.
        </p>
       <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none w-full max-w-sm text-black bg-white"
  />
  <button
    style={{ backgroundColor: "var(--color-black)", color: "white" }}
    className="px-6 py-3 rounded-lg  sm:w-auto"
  >
    SUBSCRIBE
  </button>
</div>
      </div>
    </section>
  );
};

export default FifthUi;
