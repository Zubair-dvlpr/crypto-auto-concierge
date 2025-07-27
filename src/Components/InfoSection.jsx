import React from "react";
import { CheckCircle } from "lucide-react";
import capa from '../assets/images/Capa_1.svg';
import { img } from "framer-motion/client";
const InfoSection = ({ title, description, items, icon, lastdesc }) => {
    return (
        <section className="text-white space-y-6">
            <h2 className="text-3xl leading-11 font-bold">{title}</h2>
            <p className="text-lg text-[#ffffffe4]">{description}</p>
            <ul className="space-y-5 mt-5 text-lg">
                {items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        {title === "Transaction Facilitation & Crypto Handling" ?
                            index > 2 ?
                                 <img src={capa} alt="Capa Icon" className="mx-1" />:
                                <img src={icon} alt="Check Icon" />
                            : <img src={icon} alt="Check Icon" className="" />}
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <p className="text-lg text-[#ffffffe4]">{lastdesc}</p>
        </section>
    );
};

export default InfoSection;
