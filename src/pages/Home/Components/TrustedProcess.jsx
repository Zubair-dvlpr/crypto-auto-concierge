import React from 'react';
import Exchange from "../../../assets/images/Exchange.svg";
import Payouts from "../../../assets/images/Payouts.svg";
import Paperwork from "../../../assets/images/Paperwork.svg";
import downarrow from "../../../assets/images/downarrow.svg";
import uparrow from "../../../assets/images/uparrow.svg";

const steps = [
  {
    icon: Exchange,
    text: 'Licensed Exchange Partners — Verified transactions only',
  },
  {
    icon: Payouts,
    text: 'Instant Payouts — Crypto, Bank Transfer, or Cash',
  },
  {
    icon: Paperwork,
    text: 'Private Sale Paperwork Completed On-Site',
  },
];

const arrows = [
  downarrow, // Between step 1 and 2
  uparrow,   // Between step 2 and 3
];

const TrustedProcess = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Your Crypto. Your Car. Our Trusted Process.
      </h2>
      <p className="max-w-2xl mx-auto mb-10">
        Buy or sell any vehicle on any marketplace with crypto — safely and
seamlessly.Meet Safely at a Satoshi Drive Partner Location
      </p>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Box */}
            <div className={`w-[300px] flex flex-col items-center text-center ${index % 2 === 0 ? '' : 'md:mt-25 mt-0'} p-6 `}>
              <img src={step.icon} alt="step icon" className="mb-6 w-14 h-14" />
              <p className="font-medium text-lg leading-8">{step.text}</p>
            </div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex flex-1 justify-center">
                <img src={arrows[index]} alt={`arrow ${index + 1}`} className='scale-200' />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      
    </div>
  );
};

export default TrustedProcess;
