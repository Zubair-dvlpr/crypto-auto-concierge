import React from 'react';
import HowItWorksBox from './HowItWorksBox';
import cacloction from "../../../assets/images/CACLocation.svg"
import instant from "../../../assets/images/instant.svg"
import SecurePayment from "../../../assets/images/SecurePayment.svg"
import CACPaperwork from "../../../assets/images/CACPaperwork.svg"
const HowItWorksSection = () => {
  const steps = [
    { icon: cacloction, title: 'Meet at a CAC Partner Location' },
    { icon: instant, title: 'instant Crypto Fund Verification' },
    { icon: SecurePayment, title: 'Secure Seller Payment Arranged by CAC' },
    { icon: CACPaperwork, title: 'Optional Registration & Paperwork Completed' },
  ];

  return (
    <section className="px-2 pt-16 md:px-0">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold leading-12 capitalize mb-10 text-left">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <HowItWorksBox key={index} icon={step.icon} title={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
