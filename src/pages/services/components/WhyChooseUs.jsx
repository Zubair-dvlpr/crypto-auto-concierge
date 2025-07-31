import React from 'react';
import markIcon from '../../../assets/images/Wavy_Check.svg';
const WhyChooseUs = ({ title, image, features, buyers = [], sellers = [], intro }) => {
  return (
    <section className="grid grid-cols-1 my-28 md:grid-cols-2 gap-8 items-start px-2 md:px-0 max-w-[1240px] mx-auto rounded-xl shadow-md">

      {/* Left Side: Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl"
        />
      </div>

      {/* Right Side: Content */}
      <div>
        <h2 className="text-4xl font-bold mb-4">Why Choose Satoshi Drive?</h2>
        <div className="space-y-8 text-xl">
          {/* Buyers Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">🔐 For Crypto Buyers</h3>
            <ul className="space-y-3 text-lg list-disc">
              {buyers.map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img src={markIcon} alt="" className='w-5' />
                  {text}</li>
              ))}
            </ul>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Sellers Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">💸 For Sellers</h3>
            <ul className="space-y-3 list-disc pl-5">
              {sellers.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
