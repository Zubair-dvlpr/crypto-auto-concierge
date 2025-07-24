import React from 'react'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import ContactInfoCard from './components/ContactInfoCard'
import ContactForm from './components/ContactForm'
const Contact = () => {
  return (
    <div className='pt-32    bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <div className='relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
        <div className='max-w-4xl mx-auto px-4 py-8 text-center'>
          <h2 className="text-3xl md:text-4xl font-bold leading-12 mb-2">
            Let’s Connect — We’re Ready to Assist You
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-[651px] mx-auto">
            Whether you’re a buyer, seller, or simply want to learn more about our services, our team is here to guide you through every step of your crypto vehicle transaction.
          </p>
        </div>

        <div className='max-w-[1240px] md:mx-auto mx-2 grid grid-cols-1 md:grid-cols-5 gap-7'>
          <div className='md:col-span-2 col-span-full bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl'>
            <ContactInfoCard />
          </div>
          <div className='md:col-span-3 p-7  bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
