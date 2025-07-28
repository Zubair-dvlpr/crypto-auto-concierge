import React, { useContext, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaChartBar, FaUsers, FaCogs, FaUser, FaSignOutAlt, FaTimes, FaVideo } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import adminphoto from '../assets/images/adminphoto.png';
import { AuthContext } from '../context/AuthContext';
import HelpIcon from '../assets/icons/HelpIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import CreateVideo from '../assets/icons/CreateVideo';
import BillingIcon from '../assets/icons/BillingIcon';
import MyProjectIcon from '../assets/icons/MyProjectIcon';
import ContentPlanIcon from '../assets/icons/ContentPlanIcon';
import SingleContentIcon from '../assets/icons/SingleContentIcon';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineSettings } from 'react-icons/md';
const Sidebar = ({ isOpen, toggleSidebar }) => {

  const menuItems = [
    {
      to: "/dashboard",
      label: "Genral",
      Icon: HomeIcon,
    },
    {
      to: "/transactions",
      label: "Transactions",
      Icon: CreateVideo,
    },
    {
      to: "/alltransactions",
      label: "Transaction Table",
      Icon: MyProjectIcon,
    },
    {
      to: "/partner-Inquiry",
      label: "Partner Inquiry",
      Icon: ContentPlanIcon,
    },
    {
      to: "/current-partner",
      label: "Current Partner",
      Icon: BillingIcon,
    },
    {
      to: "/approved-cryptos",
      label: "Approved cryptos",
      Icon: SingleContentIcon,
    },
    {
      to: "/marketing",
      label: "Marketing",
      Icon: HelpIcon,
    },
  ];


  const sidebarRef = useRef(null);
  const { logout } = useContext(AuthContext);
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 rounded-r-2xl left-0 h-screen w-64 bg-gradient-to-r md:from-[#2e6cf41a] md:to-[#00d2ff1a]   from-purple-700  to-purple-500 text-white flex flex-col transform ${isOpen ? 'translate-x-0 z-20' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static`}
    >
      {/* Close Button (Mobile Mode) */}
      <div className={`p-4 flex ${isOpen ? 'justify-between' : 'justify-between'}  h-[92px] items-center `}>
        <img src={logo} alt="footer logo" />
        <button className="md:hidden text-white text-2xl" onClick={() => toggleSidebar(false)}>
          <FaTimes />
        </button>
      </div>

      <div className='grid px-4 my-2 grid-cols-5'>
        <div className='col-span-2'>
          <img src={adminphoto} alt="" />
        </div>

        <div className='col-span-3'>
          <h4 className='text-xl font-semibold leading-9'>M Sharjeel</h4>
          <span className='font-semibold leading-9 text-[#ffffffe6]'>Admin</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center p-3 border-b  transition-all ${isActive
                ? 'bg-[#D015FF] text-white rounded-xl border-transparent'
                : 'hover:bg-[#D015FF] hover:rounded-xl border-[#ffffff27] text-[#ffffff]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className="mr-3" fill={isActive ? "#FFFFFF" : "#9B9EB5"} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>


      <div className='p-4 space-y-2'>
        <div className="">
          <button className="flex border-b text-left border-gray-700 hover:bg-[#D015FF] cursor-pointer gap-2 items-center justify-start w-full p-3  hover:rounded-xl">
            <MdOutlineSettings />  Setting
          </button>
        </div>
        {/* Logout Button */}
        <div className="">
          <Link to={"/"}>
            <button className="flex border-b border-gray-700 hover:bg-[#D015FF] cursor-pointer gap-2 items-center justify-start w-full p-3  hover:rounded-xl">
              <FiLogOut />  Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
