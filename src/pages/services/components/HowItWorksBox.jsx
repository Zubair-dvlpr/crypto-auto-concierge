import React from 'react';

const HowItWorksBox = ({ icon, title }) => {
  return (
    <div className="bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <img src={icon} alt={title} className=" mx-auto mb-8" />
      <h3 className="text-xl  font-bold leading-9 capitalize">{title}</h3>
    </div>
  );
};

export default HowItWorksBox;
