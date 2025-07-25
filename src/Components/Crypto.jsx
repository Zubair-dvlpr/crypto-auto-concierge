import React from 'react';
import Cryptobgimg from '../assets/images/Cryptobgimg.svg'
import { Link } from 'react-router-dom';

const Crypto = ({title , description}) => {
  return (
    <div
      className="max-w-[1240px] md:mx-auto mx-3 mb-28 rounded-2xl text-center text-white bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url('${Cryptobgimg}')` }}
    >
      <div className=" px-6">
        <h2 className="text-2xl md:text-3xl font-bold leading-12 mb-3">
          {title}
        </h2>
        <p className="text-lg md:text-xl leading-9 max-w-xl mx-auto mb-6">
        {description}
        </p>
        <Link to="/transaction">
        <button className="btn-style">
          Start Transaction
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Crypto;
