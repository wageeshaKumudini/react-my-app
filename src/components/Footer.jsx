import React from "react";
import Facebook from "../assets/facebook.svg";
import instergram from "../assets/instergram.svg"
import twitter from "../assets/twitter.svg"
import lindin from "../assets/lindin.svg"




const Footer = () => {
  return (
    <footer className="container mx-auto  bg-white py-10 border-t  ">
      <div className=" px-12 grid md:grid-cols-4 gap-8 text-center md:text-left items-start">
        {/* Left Logo Section */}
        <div>
          <h3 className="Poppins text-sky-600 mb-2">LOGO</h3>
          <p className="text-gray-500 text-sm mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-400">@Lorem</p>

          
        </div>

        {/* About us Section */}
        <div className="md:ml-30">
          <h3 className="Poppins mb-2 text-black">About us</h3>
          <ul className="space-y-1 text-gray-500">
            <li>Lorem</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Contact us Section */}
        <div>
          <h3 className="Poppins mb-2 text-black">Contact us</h3>
          <p className="text-gray-500 text-sm mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-600">+908 89097 890</p>
        </div>

        {/* Social Icons Section */}
        <div>
          <h3 className="Poppins mt-12">Follow us</h3>
          <div className="flex gap-(--1) mt-4 md:mt-0 justify-center md:justify-start">
            <a
              href="#"
              className="p-0 rounded-full bg-white flex items-center justify-center"
            >
              <img src={Facebook} alt="Facebook" className="w-[40px] h-[48px]" />
            </a>

                  <a
            href="#"
            className="p-0 rounded-full bg-white flex items-center justify-center"
          >
            <img src={instergram} alt="instergram" className="w-[40px] h-[48px]" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="p-0 rounded-full bg-white flex items-center justify-center"
          >
            <img src={twitter} alt="twitter" className="w-[40px] h-[48px]" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="p-0 rounded-full bg-white flex items-center justify-center"
          >
            <img src={lindin} alt="lindin" className="w-[40px] h-[48px]" />
          </a>
                </div>
              </div>
            </div>
      <div className=" border-t border-gray-300 my-0 left-1/2 right-1/2 -translate-x-1/2 relative w-screen"></div>
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        Copyright © 2021 Lorem All rights Reserved
      </div>
      

    </footer>
  );
};

export default Footer;
