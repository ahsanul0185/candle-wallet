import React from 'react'
import bridge from '../assets/bridge.png'

const WhatNextForCandle = () => {
  return (
      <div className='bg-light pb-10 overflow-clip'>
          <div className='section-width flex flex-col items-center py-10'>
              <img className='w-96 ml-28' src={bridge} alt="" />
              <h2 className='text-4xl md:text-5xl lg:text-6xl text-[#323638] font-black -mt-5'>Whats next for the <span className='text-primary'>Candle</span>?</h2>
              <p className='text-3xl lg:text-4xl mt-6 lg:w-3/5 lg:text-center'>We're currently working on a number of features that will be added to the platform in the coming months.</p>
          </div>
    </div>
  )
}

export default WhatNextForCandle