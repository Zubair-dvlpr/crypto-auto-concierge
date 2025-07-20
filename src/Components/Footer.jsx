import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className=" text-white pt-10">
      {/* Top Footer */}
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">

        {/* Column 1: Logo, paragraph & social links */}
        <div className='col-span-2'>
          <Link to="/">
            <img src={logo} alt="logo not found" />
          </Link>
          <p className="text-lg text-[#ffffffe7] leading-8 mt-2.5 mb-4">
            Discover NFTs by category, track the latest drops, and follow the collections you love to enjoy it!
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" className="bg-[#00D2FF] transition hover:scale-110 p-1.5 rounded-md hover:text-white"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/" className="bg-[#00D2FF] transition hover:scale-110 p-1.5 rounded-md hover:text-white"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/" className="bg-[#00D2FF] transition hover:scale-110 p-1.5 rounded-md hover:text-white"><FaYoutube /></a>
            <a href="https://www.instagram.com/" className="bg-[#00D2FF] transition hover:scale-110 p-1.5 rounded-md hover:text-white"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2: Product */}
        <div className='col-span-1'>
          <h3 className="text-xl font-semibold mb-6">Product</h3>
          <ul className="space-y-3.5  text-lg">
            <li><a href="#" className="hover:text-white">Invest</a></li>
            <li><a href="#" className="hover:text-white">Crypto</a></li>
            <li><a href="#" className="hover:text-white">Cash Card</a></li>
            <li><a href="#" className="hover:text-white">Learn</a></li>
            <li><a href="#" className="hover:text-white">Snacks</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className='col-span-1'>
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="space-y-3.5  text-lg">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Blog post</a></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className='col-span-1'>
          <h3 className="text-xl font-semibold mb-6">Resources</h3>
          <ul className="space-y-3.5  text-lg">
            <li><a href="#" className="hover:text-white">Explore NFTs</a></li>
            <li><a href="#" className="hover:text-white">Platform Status</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Partners</a></li>
            <li><a href="#" className="hover:text-white">Marketplace</a></li>
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div className='col-span-2'>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <form className="flex items-center bg-[#D9D9D9]  rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full  text-gray-900 px-3 py-3 text-sm  focus:outline-none"
            />
            <button type="submit" className=" bg-linear-65 from-[#00D2FF] to-[#D015FF]  rounded-xl  p-4 text-white hover:bg-blue-700">
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-[1240px] mx-auto border-t  border-gray-700 mt-10 py-4">
        <div className="px-4 flex flex-col md:flex-row justify-between font-Nunito  items-center text-base ">
          <p> Copyright &copy; {new Date().getFullYear()}. All Right Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
