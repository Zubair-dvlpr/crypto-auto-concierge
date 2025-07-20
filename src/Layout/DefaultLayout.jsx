import React from 'react'


import Header from '../Components/Header'
import Footer from '../Components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className='overflow-hidden'>
        {children}

        <Footer />
      </main>
     
    </React.Fragment>
  )
}

export default DefaultLayout