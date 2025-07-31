import React from 'react';
import blogimg1 from '../../../assets/images/blogimg1.png';
import blogimg2 from '../../../assets/images/blogimg2.png';
import blogimg3 from '../../../assets/images/blogimg3.png';
import blogimg4 from '../../../assets/images/blogimg4.png';
import blogimg5 from '../../../assets/images/blogimg5.png';
const blogData = [
  {
    id: 1,
    date: '03 July 2025',
    title: 'How Crypto is Changing the Private Car Market in Canada?',
    image: blogimg1, // Main blog image
    large: true,
  },
  {
    id: 2,
    date: '03 July 2025',
    title: '5 Things to Know Before Buying a Vehicle with Crypto?',
    image: blogimg2,
  },
  {
    id: 3,
    date: '03 July 2025',
    title: 'New Satoshi Drive Partner Locations — Serving the GTA & Beyond',
    image: blogimg3,
  },
  {
    id: 4,
    date: '03 July 2025',
    title: 'Our Compliance Commitment — What You Need to Know',
    image: blogimg4,
  },
  {
    id: 5,
    date: '03 July 2025',
    title: 'Understanding Crypto-to-Cash Transactions — A Quick Guide',
    image: blogimg5,
  },
];

const LatestBlogs = () => {
  const mainBlog = blogData.find(blog => blog.large);
  const sideBlogs = blogData.filter(blog => !blog.large);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12 text-white">
      <h2 className="text-3xl font-semibold mb-8">Our Latest Blogs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main Blog (Left Side) */}
        <div className="md:col-span-1 bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] p-5 rounded-lg overflow-hidden">
          <img src={mainBlog.image} alt={mainBlog.title} className="w-full rounded-xl object-cover" />
          <div className="mt-10">
            <p className="text-sm text-[#7CFEFDCC] mb-3.5">{mainBlog.date}</p>
            <h3 className="text-xl font-semibold leading-9 mb-4">{mainBlog.title}</h3>
            <a href="#" className="text-sm text-[#7CFEFD] flex items-center gap-1 hover:underline">
              READ MORE <span>→</span>
            </a>
          </div>
        </div>

        {/* Side Blogs (Right Side) */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {sideBlogs.map(blog => (
            <div key={blog.id} className="bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] p-2.5 flex items-center rounded-xl overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-[126px] object-cover" />
              <div className="px-4">
                <p className="text-xs text-[#7CFEFDCC] mb-1">{blog.date}</p>
                <h4 className="text-lg font-semibold leading-8 mb-1">{blog.title}</h4>
                <a href="#" className="text-sm text-[#7CFEFD] flex items-center gap-1 hover:underline">
                  READ MORE <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
