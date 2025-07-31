import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import markIcon from '../../../assets/images/Wavy_Check.svg';

const TransactionManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleAccordion = (index) => {
    setActiveTab(prev => (prev === index ? -1 : index));
  };

  return (
    <div className='relative before:content-[] before:block before:w-[458px] before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.2px] after:content-[] after:block after:w-[376px] after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:rounded-full after:z-[-1] after:blur-[245.2px]'>
      <section className="max-w-[1240px] mx-auto py-16 px-2 md:px-0">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-5xl font-bold leading-16 text-[#7CFEFD] mb-4">
            Crypto-to-Cash Vehicle Transactions Made Easy
          </h2>
          <p className="text-xl leading-9">
            We manage every step of your crypto vehicle transaction — from fund verification to seller payment, paperwork, and registration. With Satoshi Drive, you get trusted service, full transparency, and a seamless experience.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-[34px] capitalize font-bold mb-5 text-center">
          Our core services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Payment Handling */}
          <div className="bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] flex flex-col justify-start rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-bold leading-9 text-[#7CFEFD] mb-4">Secure Seller Payment Handling</h4>
            <p className='text-lg mb-2'>We offer safe and verified payout options across Canada:</p>
            <ul className="space-y-2 text-lg text-[#ffffffea]">
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Interac e-Transfer (EMT)</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Bank Wire Transfer</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Certified Bank Draft or Cheque</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Cash (in-person at a Satoshi Drive location)</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Crypto (BTC, ETH, USDT – if preferred)</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Lien Payoff & Protection – $149</li>
            </ul>
            <span className="mt-4 text-lg">We pay the remaining loan directly to the lender and handle all required lien paperwork.</span>
          </div>

          {/* Column 2: Paperwork */}
          <div className="bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] flex flex-col justify-start rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-bold leading-9 text-[#7CFEFD] mb-4">Vehicle Registration & Paperwork Assistance</h4>
            <p className='text-lg mb-2'>We take care of the essential paperwork so you don’t have to:</p>
            <ul className="space-y-2 text-lg text-[#ffffffea]">
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Bill of Sale Preparation</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> UVIP (Used Vehicle Info Package)</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Tax Remittance Guidance</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Lien Release Support</li>
              <li className="flex items-start gap-3"><img src={markIcon} className="w-5 h-5 mt-1" alt="icon" /> Service Ontario Submission</li>
            </ul>
          </div>

          {/* Column 3: Accordion */}
          <div>
            {/* Tab 1: Crypto Fund Verification */}
            <div className="bg-gradient-to-r p-3 rounded-xl from-[#2e6cf41a] to-[#00d2ff1a] mb-4">
              <button
                className="w-full flex justify-between items-center text-left py-3 text-xl font-bold leading-9 text-[#7CFEFD]"
                onClick={() => toggleAccordion(0)}
              >
                <span>Crypto Fund Verification</span>
                {activeTab === 0 ? <FiX /> : <FiPlus />}
              </button>
              {activeTab === 0 && (
                <div className="text-lg leading-7 pb-3 text-[#ffffffd0]">
                  We audit every transaction before closing. Satoshi Drive monitors all incoming wallets, checks for blacklist status, and verifies the source of funds for transparency, fraud prevention, and seller peace of mind.
                </div>
              )}
            </div>

            {/* Tab 2: Deal Facilitation */}
            <div className="bg-gradient-to-r p-3 rounded-xl from-[#2e6cf41a] to-[#00d2ff1a]">
              <button
                className="w-full flex justify-between items-center text-left py-3 text-xl font-bold leading-9 text-[#7CFEFD]"
                onClick={() => toggleAccordion(1)}
              >
                <span>Private Sale Support & Deal Facilitation</span>
                {activeTab === 1 ? <FiX /> : <FiPlus />}
              </button>
              {activeTab === 1 && (
                <div className="text-lg leading-7 pb-3 text-[#ffffffd0]">
                  Whether it’s Facebook Marketplace, Kijiji, Autotrader, or a direct Satoshi Drive acts as your trusted third party to secure the payment, verify the buyer, and handle the deal from end to end.
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
