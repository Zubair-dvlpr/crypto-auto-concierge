import React from 'react';
import SuggestionBannerimg from '../assets/images/SuggestionBannerimg.svg';
import imgleft from '../assets/images/imgleft.svg';
import imgright from '../assets/images/imgright.svg';
import { Link } from 'react-router-dom';

const DynamicBannerSection = ({ title, description, items, icon, buttonText, buttonLink }) => {
    return (
        <section className="px-2 md:px-0">
            <div
                className="w-full relative max-w-[1240px] md:mx-auto bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a]  my-20 md:px-24 px-6 py-10 bg-no-repeat rounded-2xl flex flex-col items-center text-center"
            >
                <img src={imgleft} alt="" className='absolute left-0 top-1/2 -translate-y-1/2' />
                {/* Title */}
                <h2 className="text-2xl max-w-3xl leading-12 md:text-4xl font-bold ">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-white text-xl leading-8 mt-4 max-w-2xl">{description}</p>

                {/* Icon List */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {items?.map((item, idx) => (
                        <div key={idx} className="flex text-lg items-center gap-2 text-white">
                            <img src={item.icon} alt="icon" />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                {buttonText && buttonLink && (
                    <Link to={buttonLink} className="mt-3">
                        <button className="btn-style">{buttonText}</button>
                    </Link>
                )}



                <img src={imgright} alt="" className='absolute right-0 top-1/2 -translate-y-1/2' />
            </div>
        </section>
    );
};

export default DynamicBannerSection;
