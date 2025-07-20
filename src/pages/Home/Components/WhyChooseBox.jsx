import React from 'react';

const WhyChooseBox = ({ icon, number, title, description, textColor }) => {
  return (
    <div className={`rounded-lg p-6 shadow-md text-white bg-linear-65 from-[#2e6cf41a] to-[#00d2ff1a]`}>
      <div className="flex justify-between items-start mb-7">
        <img src={icon} alt="icon" className="" />
        <span className={`text-3xl font-bold capitalize ${textColor}`}>{number}</span>
      </div>
      <h3 className="text-xl leading-7 font-semibold capitalize mb-3">{title}</h3>
      <p className="text-lg text-[#ffffffd0]">{description}</p>
    </div>
  );
};

export default WhyChooseBox;
