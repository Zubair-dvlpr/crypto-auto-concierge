import React from "react";
import head_office_icon from '../../../assets/images/headOffice.svg';
import phone1NoIcon from '../../../assets/images/phone1NoIcon.svg';
import mailIcon from '../../../assets/images/mailIcon.svg';
import phoneNoIcon from '../../../assets/images/phoneNoIcon.svg';
import paperIcon from '../../../assets/images/paperIcon.svg';
import mapimg from '../../../assets/images/mapimg.png';
const ContactInfoCard = () => {
    return (
        <div className=" p-7 space-y-6">
            {/* Head Office */}
            <div className="flex items-center space-x-3">
                <img
                    src={head_office_icon}
                    alt="Head Office"
                    className="mt-1"
                />
                <h2 className="text-[#7CFEFD] font-bold text-xl leading-9">Head Office</h2>
            </div>
            <p className="text-lg font-bold leading-7 mt-1">
                200 Front Street West, Toronto, Ontario, <br />
                Canada (By Appointment Only)
            </p>
            {/* Contact Info */}
            <div>
                <h3 className="text-[#7CFEFD] font-semibold text-xl capitalize mb-3">
                    Our Contact Information
                </h3>
                <div className="space-y-6 text-[#ffffffec] text-lg font-bold leading-7">
                    <div className="flex items-center space-x-3">
                        <img
                            src={phone1NoIcon}
                            alt="Phone"
                            className=""
                        />
                        <span>000-0000-000</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <img
                            src={mailIcon}
                            alt="Email"
                            className=""
                        />
                        <span>CAC212@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <img
                            src={phoneNoIcon}
                            alt="WhatsApp"
                            className=""
                        />
                        <span>000-0000-000</span>
                    </div>
                </div>
            </div>

            {/* Note */}
            <div className="flex items-center space-x-3">
                <img
                    src={paperIcon}
                    alt="Note"
                    className="mt-1"
                />
                <p className="text-sm">
                    All Transactions And Consultations Are By Appointment Only
                </p>
            </div>

            {/* Map Image */}
            <div className="rounded-xl overflow-hidden">
                <img
                    src={mapimg}
                    alt="Map"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default ContactInfoCard;
