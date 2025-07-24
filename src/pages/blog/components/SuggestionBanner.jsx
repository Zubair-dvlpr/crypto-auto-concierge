import React from 'react';
import SuggestionBannerimg from '../../../assets/images/SuggestionBannerimg.svg';
import { Link } from 'react-router-dom';
const SuggestionBanner = () => {
    return (
        <section
            className='px-2 md:px-0 '
        >
            <div
                className="w-full max-w-[1240px] md:mx-auto bg-cover bg-center my-20 md:px-24 px-6 py-10 bg-no-repeat rounded-2xl flex flex-col md:flex-row justify-between gap-7 items-center"
                style={{ backgroundImage: `url('${SuggestionBannerimg}')` }}
            >
                {/* Left Content */}
                <div className='text-center md:text-left'>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#7CFEFD]">
                        Have a Topic You Want Us to Cover?
                    </h2>
                    <p className="text-white mt-2">We’d love to hear your suggestions.</p>
                </div>

                {/* Right Button */}
                <Link to={'/contact'}>
                <button className="btn-style">
                    Contact Us
                </button>
                </Link>
            </div>
        </section>
    );
};

export default SuggestionBanner;
