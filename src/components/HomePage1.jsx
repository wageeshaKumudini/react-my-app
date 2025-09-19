import React from "react";
import heroImg from "../assets/man.svg";
import BlueCurve from "../assets/blue.svg";
import GreenCurve from "../assets/green.svg";
import WebIcon from "../assets/web.svg";
import SeoIcon from "../assets/seo.svg";
import ArvrIcon from "../assets/ar.svg";
import MobileIcon from "../assets/mobile.svg";
import { motion } from "framer-motion";

const HomePage1 = () => {
  const services = [
    {
      icon: <img src={WebIcon} alt="Web Application" className="w-[41px] h-[41px]" />,
      title: "Web Application",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-purple-100",
    },
    {
      icon: <img src={SeoIcon} alt="SEO" className="w-[41px] h-[41px]" />,
      title: "SEO",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-green-100",
    },
    {
      icon: <img src={ArvrIcon} alt="AR/VR" className="w-[41px] h-[41px]" />,
      title: "AR/VR Solutions",
      description: "Lorem Ipsum is simply .",
      bgColor: "bg-blue-100",
    },
    {
      icon: <img src={MobileIcon} alt="Mobile Apps" className="w-[41px] h-[41px]" />,
      title: "Mobile Applications",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="overflow-x-hidden ">


      {/* HERO SECTION */}


      <section className="relative bg-[#1090CB1A] py-16 md:py-28 w-full ">
        
        {/* Blue SVG */}
        <img
          src={BlueCurve}
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute top-[100px] right-[0px] w-[30px] md:w-[50px] opacity-90 hidden md:block"
        />
      <div className="container mx-auto">

        <div className="mx-auto px-[14px] max-w-[1536px]  lg:ml-[123px]">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Left Content - Shows second on mobile, first on desktop */}
<div className="flex-1 text-center md:text-left  z-10">
  <h1 className="text-[20px] sm:text-[36px] md:text-[40px] font-extrabold text-gray-900 leading-[1.2] md:leading-[55px]">
    Experienced <span className="text-sky-600">mobile and web</span>
    <br />
    <span>applications and website</span>
    <br />
    <span>builders measuring.</span>
  </h1>

  <p className="mt-[20px] text-gray-600 text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[600px] mx-auto md:mx-0">
    KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
    applications and website builders measuring dozens of completed projects.
    We build and develop mobile applications for several top platforms,
    including Android & iOS.
  </p>

  <div className="mt-[24px] md:mt-[32px] flex gap-[16px] md:gap-[20px] flex-col sm:flex-row justify-center md:justify-start">
    <button className="bg-sky-600 text-white px-[20px] md:px-[28px] py-[12px] md:py-[14px] rounded-md text-[14px] md:text-[16px] font-medium hover:bg-sky-700 transition-colors">
      Contact us
    </button>
    <button className="border border-sky-600 bg-white text-sky-600 px-[20px] md:px-[28px] py-[12px] md:py-[14px] rounded-md text-[14px] md:text-[16px] font-medium hover:bg-gray-50 transition-colors">
      View more
    </button>
  </div>
</div>


            {/* Right Image - Shows first on mobile, second on desktop */}
            <div className="flex-1 flex justify-center relative max-w-[350px] md:max-w-none mx-auto md:mx-0 md:leading-[55px]">
              {/*  hero image gradiant */}
              <div
                className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px]
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                rounded-full z-0 blur-[120px] md:blur-[180px]
                bg-[radial-gradient(circle_at_center,#FFEAA7_0%,#FFD54F_30%,#FFCA28_60%,#FFC107_80%,#FFB300_100%)] 
                opacity-80 md:opacity-90 pointer-events-none "
              ></div>
              
              <motion.img
                src={heroImg}
                alt="Hero"
                className=" z-10 w-full max-w-[300px] md:max-w-[500px] h-auto relative  top-3/4 "
                initial={{ opacity: 0, y: 50, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.08, 1] }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: { duration: 0.5 },
                  scale: { duration: 1.2, repeat: Infinity, repeatType: "loop", delay: 0.5 }
                }}
              />
            </div>
          </div>


          
          {/* Green Curve */}
          <img 
            src={GreenCurve} 
            alt="icon" 
            className="absolute left-[0%] z-10 top-[70%] md:top-[80%] w-[80px] md:w-auto opacity-80 md:opacity-100 hidden md:block" 
          />

          {/* Background blur gradient */}
          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] top-[15%] md:top-[10%] left-[4%] md:left-[8%] rounded-full z-0 blur-[40px] md:blur-[60px] 
                          bg-[radial-gradient(circle_at_center,#DED9FF_90%,rgba(222,217,255,0)_100%)]">
          </div>
        </div>

        </div>
      </section>
      {/* SERVICES SECTION  */}
      <section className="py-[40px] md:py-[60px] justify-center items-center relative overflow-hidden z-0  container mx-auto">
        <div className=" mx-auto  relative z-0 max-w-[1536px] lg:ml-[123px] sm:px-0 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[31px] justfy-center items-center ">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-[16px] w-full rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`p-3 md:p-4 rounded-xl ${service.bgColor} flex-shrink-0`}>
                  {service.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-[15px] md:text-[20px] font-Poppins font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[12px] md:text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default HomePage1;