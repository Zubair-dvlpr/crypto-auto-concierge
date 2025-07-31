import React from 'react';
import markIcon from '../../../assets/images/Wavy_Check.svg';
import startTransistion from '../../../assets/images/startTransistion.svg';
import { Link } from 'react-router-dom';

const OurPricing = () => {
  const pricingData = [
    { priceRange: "$5,000 – $10,000", serviceFee: "$595 flat" },
    { priceRange: "$10,001 – $25,000", serviceFee: "$895 flat" },
    { priceRange: "$25,001 – $50,000", serviceFee: "$1,495 flat" },
    { 
      priceRange: "$50,001 – $100,000", 
      serviceFee: "2.25% of vehicle price",
      note: "(Min: $1,750)" 
    },
    { 
      priceRange: "$100,001 – $250,000", 
      serviceFee: "2.00% of vehicle price",
      note: "(Min: $2,750)" 
    },
    { 
      priceRange: "$250,001 – $500,000", 
      serviceFee: "1.50% of vehicle price",
      note: "(Min: $4,000)" 
    },
    { 
      priceRange: "$500,001+", 
      serviceFee: "1.25% of vehicle price",
      note: "(Min: $6,000)" 
    }
  ];

  const whatsIncluded = [
    "Every wallet is audited and screened for secure, compliant transfers.",
    "EMT, wire, draft, cheque, or crypto — seller chooses.",
    "In-person transactions with full support.",
    "UVIP, bill of sale, registration — we guide or handle it.",
    "We pay off loans directly and manage the release. ($149 add-on)",
    "From start to finish, we handle every step for buyers and sellers."
  ];

  const listTitles = [
    "Instant Crypto Fund Verification",
    "Same-Day Seller Payouts",
    "Secure Satoshi Drive Partner Locations",
    "Private Sale Paperwork Help",
    "Lien Payoff Service",
    "Full Buyer & Seller Support"
  ];

  return (
    <section className="grid mt-24 grid-cols-1 max-w-[1240px] mx-auto md:grid-cols-8 gap-10 py-12 px-2 md:px-0 rounded-xl shadow-lg">
      <h2 className='text-4xl font-bold col-span-full leading-12 capitalize'>Our prices</h2>

      {/* Left Side: Table */}
      <div className='border col-span-4 h-fit rounded-xl'>
        <table className="w-full table-auto border border-gray-300 border-collapse rounded-xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-purple-600 text-white text-center">
              <th className="p-4 border border-gray-300">Vehicle Price Range</th>
              <th className="p-4 border border-gray-300">Service Fee</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-4 border border-gray-300">{item.priceRange}</td>
                <td className="p-4 border border-gray-300">
                  {item.serviceFee}
                  {item.note && <div className="text-sm text-gray-600">{item.note}</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Side: Content */}
      <div className="flex col-span-4 flex-col justify-end">
        <h2 className="text-4xl font-bold leading-12 mb-4">What's Included</h2>

        <ul className="space-y-4 text-xl mb-6">
          {whatsIncluded.map((desc, i) => (
            <li key={i} className="flex items-start gap-3">
              <img src={markIcon} alt="check" className="w-6 h-6 mt-1" />
              <div>
                <span className="font-semibold">{listTitles[i]}</span>
                <div className="text-base">{desc}</div>
              </div>
            </li>
          ))}
        </ul>

        <Link to="/transaction">
          <button className="flex w-fit items-center justify-center btn-style">
            <img src={startTransistion} alt="contact" className="w-5 h-5 mr-2" />
            <span>Start Transaction</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurPricing;