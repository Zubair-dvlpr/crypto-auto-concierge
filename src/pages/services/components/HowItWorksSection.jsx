import React from 'react';
import HowItWorksBox from './HowItWorksBox';

const HowItWorksSection = ({ title, steps, position }) => {
  return (
    <section className="px-2 pt-16 md:px-0">
      <div className="max-w-[1240px] mx-auto">
        <h2 className={`text-4xl font-bold leading-12 capitalize mb-10 text-left`} style={{ textAlign: position }}>
          {title}
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
