import React from "react";
import phoneImg from "../assets/phn.png";
import NewsLetter from "../assets/dupli.svg";
import fourthUI from "../assets/vr.svg";
import IconSvg from "../assets/si.svg";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    highlight: "Lorem Ipsum",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    smallTitle: "Lorem Ipsum is simply dummy text",
    smallDesc: "Lorem Ipsum is simply dummy text",
    desc: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.",
    image: phoneImg,
    imageLeft: false,
    imgClass: "2xl:w-xl transform rotate-6 shadow-none",
    iconBg: "bg-cyan-500",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    highlight: "Lorem Ipsum",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    smallTitle: "Lorem Ipsum is simply dummy text",
    smallDesc: "Lorem Ipsum is simply dummy text",
    desc: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
    image: NewsLetter,
    imageLeft: true,
    imgClass: "w-[300px] md:w-[400px] transform rotate-6 shadow-none",
    iconBg: "bg-sky-600",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    highlight: "Lorem Ipsum",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    smallTitle: "Lorem Ipsum is simply dummy text",
    smallDesc: "Lorem Ipsum is simply dummy text",
    desc: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
    image: fourthUI,
    imageLeft: false,
    imgClass: "w-[300px] md:w-[400px] transform rotate-6 shadow-none",
    iconBg: "bg-purple-600",
  },
];

const Thirdui = () => {
  return (
    <section className="py-1 bg-white w-full">
      
      <div className="max-w-[1536px] mx-auto px-4 md:px-12 ">
        <div className="text-center mb-16">
          <div className=" border-t border-gray-300 my-6 left-1/2 right-1/2 -translate-x-1/2 relative w-screen "></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
          <p className="text-gray-500 mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's
          </p>
        </div>

        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row gap-12 items-center mb-20"
          >
            <div
              className={`w-full md:w-1/2 ${
                service.imageLeft ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`${service.iconBg} rounded-full p-5 w-16 h-16 flex items-center justify-center`}
                >
                  <img src={IconSvg} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {service.smallTitle}
                  </h4>
                  <p className="text-gray-500 text-sm">{service.smallDesc}</p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                <span className="text-sky-600">{service.highlight}</span>{" "}
                {service.title.replace(service.highlight, "")}
              </h3>

              <p className="text-gray-800 leading-relaxed">{service.desc}</p>
            </div>

            <div
              className={`w-full md:w-1/2 flex justify-center relative ${
                service.imageLeft ? "md:order-1" : "md:order-2"
              }`}
            >
                {/* Radial gradient background by service id */}
                {service.id === 1 && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full z-0 blur-[60px] md:blur-[90px]
                    bg-[radial-gradient(circle_at_center,#a78bfa_40%,rgba(167,139,250,0)_100%)] opacity-50 pointer-events-none"
                  ></div>
                )}
                {service.id === 2 && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full z-0 blur-[60px] md:blur-[90px]
                    bg-[radial-gradient(circle_at_center,#fde68a_40%,rgba(253,230,138,0)_100%)] opacity-50 pointer-events-none"
                  ></div>
                )}
                {service.id === 3 && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full z-0 blur-[60px] md:blur-[90px]
                    bg-[radial-gradient(circle_at_center,#a78bfa_40%,rgba(167,139,250,0)_100%)] opacity-50 pointer-events-none"
                  ></div>
                )}
                
                <img
                  src={service.image}
                  alt="UI Showcase"
                  className={service.imgClass}
                />
                
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thirdui;