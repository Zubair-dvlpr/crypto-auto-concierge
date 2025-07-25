import React from 'react';
import markIcon from '../../../assets/images/Wavy_Check.svg';
import startTransistion from '../../../assets/images/startTransistion.svg';
import { Link } from 'react-router-dom';
const OurPricing = () => {
  const pricingData = [
    { priceRange: "$5,000 – $10,000", serviceFee: "$500 flat" },
    { priceRange: "$10,001 – $25,000", serviceFee: "$750 flat" },
    { priceRange: "$25,001 – $50,000", serviceFee: "$1,250 flat" },
    { priceRange: "$50,001 – $100,000", serviceFee: "2% of vehicle price" },
    { priceRange: "$100,001 – $250,000", serviceFee: "2% of vehicle price" },
    { priceRange: "$250,001+", serviceFee: "1% of vehicle price" }
  ];
  return (
    <section className="grid mt-24 grid-cols-1 max-w-[1240px] mx-auto md:grid-cols-8 gap-10 py-12 px-2 md:px-0 rounded-xl shadow-lg">
      <h2 className='text-4xl font-bold col-span-full leading-12 capitalize'>Our prices</h2>

      {/* Left Side: Table */}
      <div className='border col-span-4 h-fit rounded-xl'>
        <table className="w-full table-auto border border-gray-300 border-collapse rounded-xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-purple-600 text-white text-center">
              <th className="p-4 border border-gray-300">Vehicle Price</th>
              <th className="p-4 border border-gray-300">Service Fee</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-4 border border-gray-300">{item.priceRange}</td>
                <td className="p-4 border border-gray-300">{item.serviceFee}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div></div>


      {/* Right Side: Content */}
      <div className="flex col-span-3 flex-col justify-end">
        <h2 className="text-4xl font-bold leading-12 mb-4">
          What’s Included
        </h2>
        <p className=" mb-6">
          We provide services like:
        </p>

        <ul className="space-y-8 text-xl mb-6">
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="check" className="w-6 h-6 mt-1" />
            <span className="">Instant Crypto Fund Verification</span>
          </li>
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="secure" className="w-6 h-6 mt-1" />
            <span className="">Same-Day EMT, Wire, or Draft Payout</span>
          </li>
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="support" className="w-6 h-6 mt-1" />
            <span className="">Trusted CAC Partner Locations</span>
          </li>
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="support" className="w-6 h-6 mt-1" />
            <span className="">Private Sale Paperwork Support</span>
          </li>
        </ul>

        <Link to="/transaction">
          <button className="flex w-fit  items-center justify-center btn-style">
            <img src={startTransistion} alt="contact" className="w-5 h-5 mr-2" />
            <span>Start Transaction</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurPricing;
