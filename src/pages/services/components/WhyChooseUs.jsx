import React from 'react';
import  whychooseimg from "../../../assets/images/whychooseimg.png"
import markIcon from '../../../assets/images/Wavy_Check.svg';
const WhyChooseUs = () => {
  return (
    <section className="grid grid-cols-1 my-28 md:grid-cols-2 gap-8 items-center px-2 md:px-0 max-w-[1240px] mx-auto rounded-xl shadow-md">
      
      {/* Left Side: Image */}
      <div className="flex justify-center">
        <img
          src={whychooseimg}
          alt="Why Choose Us"
          className="w-full rounded-xl"
        />
      </div>

      {/* Right Side: Content */}
      <div>
        <h2 className="text-4xl font-bold leading-12  mb-6">
          Why Choose Crypto Auto Concierge?
        </h2>

        <ul className="space-y-5 text-xl">
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="Secure" className="w-6 h-6 mt-1 " />
            <span className="">Secure and transparent transactions powered by blockchain.</span>
          </li>
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="Global" className="w-6 h-6 mt-1 " />
            <span className="">Buy vehicles globally using your preferred cryptocurrency.</span>
          </li>
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="Concierge" className="w-6 h-6 mt-1 " />
            <span className="">Concierge-style customer support from start to finish.</span>
          </li>
          <li className="flex items-start gap-3">
            <img src={markIcon} alt="Fast" className="w-6 h-6 mt-1 " />
            <span className="">Fast processing with no middlemen or hidden fees.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
