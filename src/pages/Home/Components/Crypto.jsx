import React from 'react';
import Cryptobgimg from '../../../assets/images/Cryptobgimg.svg'
const Crypto = () => {
  return (
    <div
      className="max-w-[1240px] md:mx-auto mx-3 rounded-2xl text-center text-white bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url('${Cryptobgimg}')` }}
    >
      <div className=" px-6">
        <h2 className="text-2xl md:text-3xl font-bold leading-12 mb-3">
          Start Your Crypto Vehicle Deal Today
        </h2>
        <p className="text-lg md:text-xl leading-9 max-w-xl mx-auto mb-6">
         We handle it all: fund verification, instant payout, and private sale paperwork.
        </p>
        <button className="bg-linear-65 from-[#00D2FF] to-[#D015FF]  font-semibold px-6 py-3 rounded-xl transition">
          Start Transaction
        </button>
      </div>
    </div>
  );
};

export default Crypto;
