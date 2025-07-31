import React from 'react';
import markIcon from '../../../assets/images/Wavy_Check.svg';
const BlogFollowSection = () => {
  const points = [
    'Stay informed on industry changes',
    'Get exclusive updates on Satoshi Drive services and offers',
    'Learn tips to protect your crypto vehicle transactions',
  ];

  return (
    <section className="w-full max-w-5xl mx-auto text-center py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
        Why Follow Our Blog?
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 text-white">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 text-base md:text-lg">
            <img src={markIcon} alt="" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFollowSection;
