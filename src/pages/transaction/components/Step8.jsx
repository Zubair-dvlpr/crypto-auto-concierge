import React, { forwardRef, useImperativeHandle } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Clock } from "lucide-react";
import CustomSelect from "../../contact/components/CustomSelect";

const Step8 = forwardRef(({ data, setData }, ref) => {
  const cacLocationOptions = [
    "CAC Toronto",
    "CAC Mississauga",
    "CAC London",
    "CAC Scarborough",
    "CAC Pickering",
  ];

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.meetingDate) return "Please select a requested meeting date.";
      if (!data.meetingTime) return "Please select a meeting time.";
      if (!data.meetingLocation) return "Please select a preferred CAC meeting location.";
      return true;
    },
  }));

  return (
    <div className="text-white space-y-6">
      <h2 className="text-xl font-semibold">
        You’ll receive an email with transaction details. A CAC team member will call both parties to confirm.
      </h2>

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
            value={data.meetingTime ?? ""}
            onChange={(e) => setData({ ...data, meetingTime: e.target.value })}
            className="input-style"
          />
          <Clock className="absolute right-[17.6px] top-1/2 -translate-y-1/2 w-[17.6px] h-4 text-white pointer-events-none" />
        </div>
      </label>

      {/* Preferred Meeting Location */}
      <div>
        <span className="block mb-2 font-medium">Preferred Meeting Location</span>
        <CustomSelect
          label=""
          options={cacLocationOptions}
          selected={data.meetingLocation}
          onChange={(val) =>
            setData((prev) => ({ ...prev, meetingLocation: val }))
          }
        />
      </div>
    </div>
  );
});

export default Step8;
