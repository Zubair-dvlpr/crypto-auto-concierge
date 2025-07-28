import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
// import TopNavbar from '../Components/TopNavbar';
import pricingbgtop from '../assets/images/pricebgtop.png'
import Glow from '../assets/images/Glow.png'


const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (open) => {
    setIsSidebarOpen(open);
  };

  return (
    <div className="flex h-screen  bg-cover bg-no-repeat bg-center  relative  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:bottom-0 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]  " style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <img src={Glow} alt="" className='absolute -z-10 top-0 left-0 h-full' />
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay for Mobile (When Sidebar is Open) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => toggleSidebar(false)}></div>
      )}

      {/* Right Section */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* Top Navbar with Toggle Button */}
        {/* <TopNavbar toggleSidebar={toggleSidebar} /> */}
        <div>
          <div className="flex justify-end p-4 items-center">
            <button className="md:hidden text-white text-2xl mr-4" onClick={() => toggleSidebar(true)}>
              ☰
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto w-full p-6 text-white ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
