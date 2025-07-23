import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import markIcon from '../../../assets/images/Wavy_Check.svg';
const TransactionManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleAccordion = (index) => {
    setActiveTab(prev => (prev === index ? -1 : index));
  };

  return (
    <div className='relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
      <section className="max-w-[1240px] mx-auto py-16 px-2 md:px-0">
        {/* Top Heading & Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-4xl font-bold  leading-12 text-[#7CFEFD] mb-4">
            Complete Crypto Vehicle Transaction Management
          </h2>
          <p className="text-xl leading-9">
            We manage every step of your crypto vehicle transaction — from fund verification to seller payment, paperwork, and registration. With CAC, you get trusted service, full transparency, and a seamless experience.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-[34px] capitalize font-bold mb-5 text-center">
          Our core services
        </h3>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div className="bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] flex flex-col justify-between rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-bold leading-9 text-[#7CFEFD] mb-4">Secure Seller Payment Handling</h4>
            <ul className="space-y-3 text-xl  text-[#ffffffea] ">
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Interac e-Transfer (EMT)</li>
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Bank Wire Transfer</li>
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Certified Bank Draft</li>
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Certified Bank Draft</li>
            </ul>
          </div>

          {/* Column 2 */}

          <div className="bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] flex flex-col justify-between rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-bold leading-9 text-[#7CFEFD] mb-4">Vehicle Registration & Paperwork Assistance</h4>
            <ul className="space-y-3 text-xl  text-[#ffffffea] ">
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Bill of Sale Preparation</li>
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> UVIP</li>
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Tax Remittance Guidance</li>
              <li className="flex items-start  leading-7 gap-4"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Submission with Service Ontario</li>
            </ul>
          </div>

          {/* Column 3: Accordion */}
          <div className="">
            {/* Tab 1 */}
            <div className="bg-gradient-to-r p-3 rounded-xl from-[#2e6cf41a] to-[#00d2ff1a] mb-4">
              <button
                className="w-full flex justify-between items-center text-left py-3 text-xl font-bold leading-9 text-[#7CFEFD]"
                onClick={() => toggleAccordion(0)}
              >
                <span>Crypto Fund Verification</span>
                {activeTab === 0 ? <FiX /> : <FiPlus />}
              </button>
              {activeTab === 0 && (
                <div className="text-lg leading-7 pb-3">
                  Our escrow system protects both parties by holding funds until all steps are verified and complete.
                </div>
              )}
            </div>

            {/* Tab 2 */}
            <div className='bg-gradient-to-r rounded-xl p-3 from-[#2e6cf41a] to-[#00d2ff1a]'>
              <button
                className="w-full flex justify-between items-center text-left py-3 text-xl font-bold leading-9 text-[#7CFEFD]"
                onClick={() => toggleAccordion(1)}
              >
                <span>Private Sale Support & Deal Facilitation</span>
                {activeTab === 1 ? <FiX /> : <FiPlus />}
              </button>
              {activeTab === 1 && (
                <div className="text-lg leading-7 pb-3">
                  Our smart contracts automate the entire process—ensuring compliance, speed, and transparency in every transaction.
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>

  );
};

export default TransactionManagement;
