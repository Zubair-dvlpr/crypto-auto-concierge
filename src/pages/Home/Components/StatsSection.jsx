import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import StatBox from './StatBox';
import Facilitated from '../../../assets/images/Facilitated.svg';
import Funds from '../../../assets/images/Funds.svg';
import Verified from '../../../assets/images/Verified.svg';
import CryptoPriceMarquee from './cryptoData';
const StatsSection = () => {
  const stats = [
    {
      icon: Facilitated,
      value: '1+',
      label: 'Verified Partner Locations',
    },
    {
      icon: Verified,
      value: '$1M+',
      label: 'Crypto Deals Facilitated',
    },
    {
      icon: Funds,
      value: '29%',
      label: 'Funds Verified & Cleared',
    },
  ];

  return (
    <div className="max-w-[1240px] md:mx-auto mx-2 bg-linear-65 from-[#2e6cf41a] to-[#00d2ff1a] rounded-b-xl px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CryptoPriceMarquee />
      {stats.map((stat, index) => (
        <StatBox
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default StatsSection;
