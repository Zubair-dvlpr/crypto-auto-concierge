import React from 'react';

const Overview = () => {
  const boxes = [
    { title: 'Total New Leads', value: 148 },
    { title: 'Total Payouts Sent', value: 148 },
    { title: 'Partner Locations', value: 12 },
    { title: 'CAC Fees Collected', value: "$123,000" },
    { title: 'Total Partner Earnings', value: "$123,000" },
  ];

  return (
    <div className=" flex flex-col items-center justify-start pt-10 px-4">
      {/* Welcome Message */}
      <h1 className="text-3xl font-semibold mb-10 text-center">
        Welcome Shirjeel Arshad
      </h1>

      {/* Boxes */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-gradient shadow-md rounded-xl p-6 text-center w-full sm:w-[48%] lg:w-[30%]"
          >
            <h2 className="text-xl font-bold leading-9 mb-10">{box.title}</h2>
            <p className="text-4xl text-[#00D2FF] font-semibold leading-8 capitalize">
              {box.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
