import React from 'react';

const FaqItem = ({ icon, title, content, isOpen, onClick }) => {
  return (
    <div className=" bg-linear-65 from-[#2e6cf41a] rounded-xl to-[#00d2ff1a] p-4">
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <img src={icon} alt="icon" className="" />
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <span className="text-xl font-bold">
          {isOpen ? '×' : '+'}
        </span>
      </div>
      {isOpen && (
        <p className="mt-3 text-sm pl-13 ">{content}</p>
      )}
    </div>
  );
};

export default FaqItem;
