import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="text-white pt-10">
      {/* Top Footer */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">

        {/* Column 1: Logo + Tagline */}
        <div className="col-span-2">
          <Link to="/">
            <img src={logo} alt="Crypto Auto Concierge" className="mb-3" />
          </Link>
          <p className="text-base text-[#ffffffcc] leading-7">
            Buy With Crypto. Seller Gets Dollars. Any Vehicle, Any Marketplace, Anywhere in Canada.
          </p>
        </div>

        {/* Column 2: Service */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Service</h3>
          <ul className="space-y-3 text-base">
            <li><Link to="#" className="hover:text-white">Services</Link></li>
            <li><Link to="#" className="hover:text-white">Pricing</Link></li>
            <li><Link to="#" className="hover:text-white">For Sellers</Link></li>
            <li><Link to="#" className="hover:text-white">For Buyers</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-base">
            <li><Link to="#" className="hover:text-white">Contact</Link></li>
            <li><Link to="#" className="hover:text-white">About Us</Link></li>
            <li><Link to="#" className="hover:text-white">Become Partner</Link></li>
            <li><Link to="#" className="hover:text-white">Investor Relations</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Resources</h3>
          <ul className="space-y-3 text-base">
            <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white">Blogs & Updates</Link></li>
            <li><Link to="#" className="hover:text-white">Compliance and Legal</Link></li>
          </ul>
        </div>

        {/* Column 5: Stay Connected */}
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <form className="flex items-center bg-[#D9D9D9] rounded-xl overflow-hidden max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full text-gray-900 px-4 py-3 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00D2FF] to-[#D015FF] p-4 text-white"
            >
              <FaArrowRight />
            </button>
          </form>

          <div className="flex gap-4 mt-5">
            <a href="https://facebook.com" className="bg-[#00D2FF] p-2 rounded-md hover:scale-110 transition"><FaFacebookF /></a>
            <a href="https://linkedin.com" className="bg-[#00D2FF] p-2 rounded-md hover:scale-110 transition"><FaLinkedinIn /></a>
            <a href="https://youtube.com" className="bg-[#00D2FF] p-2 rounded-md hover:scale-110 transition"><FaYoutube /></a>
            <a href="https://instagram.com" className="bg-[#00D2FF] p-2 rounded-md hover:scale-110 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-[1240px] mx-auto border-t border-gray-700 mt-10 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Crypto Auto Concierge (CAC)™ {new Date().getFullYear()}, All Right Reserved.</p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
