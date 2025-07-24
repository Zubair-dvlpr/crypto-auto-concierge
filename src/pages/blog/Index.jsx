import React from 'react'
import Pagetitle from './components/Pagetitle'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import Timeline from './components/Timeline'
import LatestBlogs from './components/LatestBlogs'
import SuggestionBanner from './components/SuggestionBanner'
import BlogFollowSection from './components/BlogFollowSection'
const Blog = () => {
  return (
    <div className='pt-32    bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <Pagetitle />
      <Timeline />
      <LatestBlogs />
      <SuggestionBanner />
      <BlogFollowSection />

    </div>
  )
}

export default Blog
