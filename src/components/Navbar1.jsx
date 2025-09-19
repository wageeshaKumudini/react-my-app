// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import Dot from "../assets/dot.svg";
import { X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
  ];

  // Detect section in viewport to update active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveLink(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full border-gray-200 fixed top-0 left-0 bg-white z-50 max-w-[1536] ">
      <nav className="flex justify-between items-center px-4 md:px-1 py-4 container mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-600">LOGO</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 ">
          <ul className="flex items-center gap-15 relative mr-6">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`font-medium transition-colors ${
                    activeLink === link.name
                      ? "text-sky-600"
                      : "text-black hover:text-sky-600"
                  }`}
                >
                  {link.name}
                </a>
                {activeLink === link.name && (
                  <img
                    src={Dot}
                    alt="dot"
                    className="absolute top-[-1px] -left-1.5 transform -translate-x-1/2 w-2 h-2"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-600"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4 z-40">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  activeLink === link.name
                    ? "text-sky-600"
                    : "text-black hover:text-sky-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-sky-600 text-white px-5 py-1 rounded-md hover:bg-sky-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
