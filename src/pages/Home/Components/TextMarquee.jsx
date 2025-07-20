import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa"; // Example Icon (Change as needed)
import doller from "../../../assets/images/doller.svg";
const TextMarquee = () => {
    const texts = [
        "CRYPTO + VEHICLES • DEALS DONE FAST",
        "CRYPTO + VEHICLES • DEALS DONE FAST",
        "CRYPTO + VEHICLES • DEALS DONE FAST",
        "CRYPTO + VEHICLES • DEALS DONE FAST",
        "CRYPTO + VEHICLES • DEALS DONE FAST",
        "CRYPTO + VEHICLES • DEALS DONE FAST",
        "CRYPTO + VEHICLES • DEALS DONE FAST",
    ];

    return (
        <div className="w-full bg-gradient-to-r from-[#D015FF] to-[#00D2FF]  mt-7 py-5">
            <Marquee speed={60} gradient={false} pauseOnHover={false}>
                {texts.map((text, index) => (
                    <div key={index} className={`flex items-center space-x-4 text-2xl capitalize  font-bold  ${index !== texts.length - 1 ? "mr-[22px]" : ""}  mx-4`}>
                        <img src={doller} alt="Dollar Icon" className="w-8 h-8" />
                        <span className="">{text}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TextMarquee;
