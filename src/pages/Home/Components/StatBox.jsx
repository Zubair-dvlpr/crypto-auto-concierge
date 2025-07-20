import React from 'react';

const StatBox = ({ icon: Icon, value, label }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-900 text-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="">
        <img src={Icon} alt={label} className="" />
      </div>
      <div className='flex flex-col h-full justify-between '>
        <h4 className="text-3xl uppercase font-semibold">{value}</h4>
        <p className="text-base uppercase">{label}</p>
      </div>
    </div>
  );
};

export default StatBox;
