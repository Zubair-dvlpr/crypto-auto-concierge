import React from 'react';
import { FaCheck } from 'react-icons/fa';
import CryptoPartnersImg from '../../../assets/images/Major.png';
import WavyCheck from '../../../assets/images/Wavy_Check.svg';
import { Link } from 'react-router-dom';
const CryptoPartners = () => {
  return (
    <div className="max-w-[1240px] md:mx-auto px-3 grid grid-cols-1 md:grid-cols-2 items-center gap-10  py-16">

      {/* Left Side Image */}
      <div>
        <img
          src={CryptoPartnersImg}
          alt="Crypto Coins"
          className="w-full max-w-lg mx-auto"
        />
      </div>

      {/* Right Side Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Work with All Major Cryptos
        </h2>

        <p className="text-lg mb-4">
          Buy or sell any vehicle using your preferred cryptocurrency — securely verified and processed through trusted partners.
        </p>

        <p className="text-lg mb-4 font-semibold">Supported Assets Include:</p>

        {/* List with Check Icons */}
        <ul className="space-y-2 mb-6">
          {[
            'Bitcoin (BTC)',
            'Ethereum (ETH)',
            'Litecoin (LTC)',
            'Dogecoin (DOGE)',
            'USDT & Stablecoins',
            'Top 100 Altcoins (via approved exchanges)',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src={WavyCheck} alt="" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mb-6">
          Every transaction is reviewed for source-of-funds compliance and verified through licensed platforms — giving you confidence at every step.
        </p>

        {/* Gradient Button */}
        <Link to={"/pricing"}>
          <button className="btn-style">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CryptoPartners;
