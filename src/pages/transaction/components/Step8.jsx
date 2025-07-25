import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const Step8 = ({ data, setData }) => {
    return (
        <div className="text-white space-y-6">
            <h2 className="text-xl font-semibold">Crypto Auto Concierge Services</h2>

            {/* Meeting Date */}
            <label className="block">
                <span className="block mb-2 font-medium">Requested Meeting Date:</span>
                <div className="relative">
                    <DatePicker
                        selected={data.meetingDate}
                        onChange={(date) => setData({ ...data, meetingDate: date })}
                        placeholderText="Select a date"
                        className="input-style w-full"
                    />
                    <CalendarDays className="absolute right-4 top-3 w-5 h-5 text-white pointer-events-none" />
                </div>
            </label>

            {/* Meeting Time */}
            <label className="block">
                <span className="block mb-2 font-medium">Requested Meeting Time</span>
                <div className="relative">
                    <input
                    type="time"
                    placeholder="Please select a CAC Location to meet"
                    value={data.meetingTime ?? ""}
                    onChange={(e) => setData({ ...data, meetingTime: e.target.value })}
                        className="input-style"
                    />
                    <Clock className="absolute right-[17.6px] top-1/2 -translate-y-1/2 w-[17.6px] h-4 text-white pointer-events-none" />
                </div>
            </label>



            {/* Year / Make / Model */}
            <label className="block mb-6">
                <span className="block mb-4 text-lg font-semibold leading-7">Preferred Meeting Location</span>
                <input
                    type="text"
                    placeholder="Please select a CAC Location to meet"
                    value={data.meetingLocation}
                    onChange={(e) => setData({ ...data, meetingLocation: e.target.value })}
                    className="input-style"
                />
            </label>


        </div>
    );
};

export default Step8;
