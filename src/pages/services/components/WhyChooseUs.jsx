import React from 'react';

const WhyChooseUs = ({ title, image, features, intro }) => {
  return (
    <section className="grid grid-cols-1 my-28 md:grid-cols-2 gap-8 items-center px-2 md:px-0 max-w-[1240px] mx-auto rounded-xl shadow-md">
      
      {/* Left Side: Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl"
        />
      </div>

      {/* Right Side: Content */}
      <div>
        <h2 className="text-4xl font-bold leading-12 mb-6">
          {title}
        </h2>

        {/* Optional paragraph */}
        {intro && <p className="mb-5 text-lg">{intro}</p>}

        <ul className="space-y-5 text-xl">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src={item.icon} alt="check" className="w-6 h-6 mt-1" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
