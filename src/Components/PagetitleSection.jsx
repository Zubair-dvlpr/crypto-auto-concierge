import React from 'react'

const PagetitleSection = ({title, paragraph}) => {
    return (
        <div className='max-w-[1240px] space-y-6  mx-auto text-center px-2 sm:px-4 py-8'>
            <h1 className="text-3xl sm:text-4xl max-w-4xl mx-auto font-bold leading-12 ">{title}</h1>
            <p className='text-xl leading-8 text-[#ffffffea]'>{paragraph}</p>
        </div>
    )
}

export default PagetitleSection
