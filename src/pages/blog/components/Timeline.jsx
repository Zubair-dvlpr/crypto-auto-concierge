import React from 'react'
import markIcon from '../../../assets/images/Wavy_Check.svg';
const Timeline = () => {
    return (
        <div className='px-2 md:px-0 relative after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:bottom-0 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>

            <div class="max-w-[1240px] mx-auto">
                <div class="flex flex-no-wrap lg:flex-row md:flex-row justify-center pt-10">

                    <div class="w-2/5 flex-none p-2 hidden lg:block">

                    </div>

                    <div class="w-1/5 sm:1/3 flex-none float-left">
                        <div class="bg-[#7CFEFDF5] px-[0.5px]  h-full w-1 mx-auto">
                            <button
                                class="h-14 w-14 bg-[#7CFEFDF5] text-[#636363] text-2xl leading-9  font-bold rounded-full -ml-7"
                            >1</button>
                        </div>
                    </div>

                    <div class="lg:w-2/5 w-4/5 mb-10  sm:2/3 flex p-6  bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl">
                        <p className='text-lg flex items-start gap-2 '>
                            <img src={markIcon} alt="" />
                            Crypto trends in private vehicle transactions
                        </p>
                    </div>
                </div>

                <div class="flex flex-no-wrap lg:flex-row flex-row-reverse justify-center">

                    <div class="lg:w-2/5 w-4/5 mb-10  sm:2/3 flex p-6  bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl">
                        <p className='text-lg flex items-start gap-2 '>
                            <img src={markIcon} alt="" />
                            Regulatory updates affecting crypto payments in Canada
                        </p>
                    </div>

                    <div class="w-1/5 sm:1/3 flex-none float-left">
                        <div class="bg-[#7CFEFDF5] px-[0.5px] h-full w-1 mx-auto">
                            <button
                                class="h-14 w-14 bg-[#7CFEFDF5] text-[#636363] text-2xl leading-9  font-bold rounded-full -ml-7"
                            >2</button>
                        </div>
                    </div>

                    <div class="w-2/5 sm:2/3 flex-none p-2 hidden lg:block"></div>

                </div>

                <div class="flex flex-no-wrap  lg:flex-row justify-center">

                    <div class="w-2/5 flex-none p-2 hidden lg:block"></div>

                    <div class="w-1/5 sm:1/3 flex-none float-left">
                        <div class="bg-[#7CFEFDF5] px-[0.5px] h-full w-1 mx-auto">
                            <button
                                class="h-14 w-14 bg-[#7CFEFDF5] text-[#636363] text-2xl leading-9  font-bold rounded-full -ml-7"
                            >3</button>
                        </div>
                    </div>

                    <div class="lg:w-2/5 w-4/5 mb-10 sm:2/3 flex p-6  bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl">
                        <p className='text-lg flex items-start gap-2 '>
                            <img src={markIcon} alt="" />
                            Best practices for secure transactions
                        </p>
                    </div>

                </div>

                <div class="flex flex-no-wrap lg:flex-row flex-row-reverse justify-center">

                    <div class="lg:w-2/5 w-4/5 mb-10  sm:2/3 flex p-6  bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl">
                        <p className='text-lg flex items-start gap-2 '>
                            <img src={markIcon} alt="" />
                            Satoshi Drive service updates, partner announcements, and new locations
                        </p>
                    </div>

                    <div class="w-1/5 sm:1/3 flex-none float-left">
                        <div class="bg-[#7CFEFDF5] px-[0.5px] h-full w-1 mx-auto">
                            <button
                                class="h-14 w-14 bg-[#7CFEFDF5] text-[#636363] text-2xl leading-9  font-bold rounded-full -ml-7"
                            >4</button>
                        </div>
                    </div>

                    <div class="w-2/5 sm:2/3 flex-none p-2 hidden lg:block"></div>

                </div>

                <div class="flex flex-no-wrap  lg:flex-row justify-center">

                    <div class="w-2/5 flex-none p-2 hidden lg:block"></div>

                    <div class="w-1/5 sm:1/3 flex-none float-left">
                        <div class=" px-[0.5px] h-full w-1 mx-auto">
                            <button
                                class="h-14 w-14 bg-[#7CFEFDF5] text-[#636363] text-2xl leading-9  font-bold rounded-full -ml-7"
                            >5</button>
                        </div>
                    </div>

                    <div class="lg:w-2/5 w-4/5 mb-10 sm:2/3 flex p-6  bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] rounded-xl">
                        <p className='text-lg flex items-start gap-2 '>
                            <img src={markIcon} alt="" />
                            Best practices for secure transactions
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Timeline
