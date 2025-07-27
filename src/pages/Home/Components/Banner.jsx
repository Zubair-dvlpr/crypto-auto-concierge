import React from 'react'
import bannerCenterImg from '../../../assets/images/bannerCenterImg.svg'
import bannerbgImg from '../../../assets/images/bannerbg.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='relative  overflow-hidden before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]' >
            <div className="max-w-[1240px] text-center mx-auto text-white pt-40">
                <div className='max-w-[810px] mx-auto'>
                    <h1 className="text-4xl md:text-5xl font-bold md:leading-20 leading-16 mb-4">Secure Crypto Payments for <span className='text-[#7CFEFD]'>Private Vehicle Sales</span></h1>
                    <p className="text-xl leading-8 tracking-[-0.5px] md:text-xl mb-4">Secure Transactions | Concierge Handling | Instant Payout Options</p>
                </div>
            </div>

            <div className="max-w-[1240px] text-center mx-auto py-5">
                <Link className='text-center mx-auto' to="/transaction">
                    <button className="btn-style">
                        Start Deal 
                    </button>
                </Link>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-bottom bg-no-repeat lg:h-[600px] overflow-hidden" style={{ backgroundImage: `url('${bannerbgImg}')` }}>

                <img
                    src={bannerCenterImg}
                    alt="Center Banner"
                    className="mx-auto h-full object-contain"
                />

            </div>

        </div>
    )
}

export default Banner
