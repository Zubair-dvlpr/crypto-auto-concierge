import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // ✅ Navigation Links Array
  const navLinks = [
    { name: "Contact", path: "/cotact" },
    { name: "Faq", path: "/faq" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" }
  ];

  // Step 1: Check if the current route is Home ('/')
  const isHomePage = location.pathname === "/";

  return (
    <header className="absolute px-2 md:px-0 top-0 left-0 w-full z-50">
      <div className="max-w-[1240px] mt-4 md:mt-10 rounded-2xl p-5 bg-[#07071c9f] mx-auto flex items-center justify-between">
        {/* Left - Logo with Right Border */}
        <div className="flex items-center space-x-4">
          <div className="text-xl  font-bold">
            <Link to="/">
             <img src={logo} alt="logo not found" />
            </Link>
          </div>
          
        </div>

        {/* Center - Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-300 ${isActive ? "text-[#84FF9F]" : `${isHomePage ? ' text-white' : 'text-[#FFF]'} hover:text-[#84FF9F]`
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right - Login Button with Left Border */}
        <div className="items-center hidden md:flex space-x-4">
         
          <Link to="/login">
            <button className={` bg-linear-65 from-[#00D2FF] to-[#D015FF]  capitalize px-12 text-base font-semibold py-4 rounded-xl text-white`}>
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex gap-4">
          <div className=" h-24"></div> {/* Vertical Line */}
          <button onClick={() => setIsOpen(!isOpen)} className="white  text-2xl w-10 focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 rounded-2xl py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => (isActive ? "text-[#84FF9F] font-bold" : "text-black hover:text-gray-500")}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="bg-linear-65 from-[#00D2FF] to-[#D015FF]  capitalize px-4 py-2 rounded-xl text-white">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
