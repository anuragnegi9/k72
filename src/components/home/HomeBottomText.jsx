import React from 'react'
import { Link } from "react-router-dom";

export const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
      <p className='absolute lg:w-[20vw] w-55 lg:right-5 right-2 bottom-30 lg:bottom-38 font-[font1] lg:text-lg text-xs lg:leading-5 leading:tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.

      </p>
      <div className='lg:border-3  border-2 lg:leading-[4.7vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 h-12 flex items-center px-6 pt-1 lg:px-14  border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6 uppercase' to='../work'>Work</Link>
      </div>
      <div className=' lg:border-3 border-2 lg:leading-[4.7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 h-12 flex items-center px-6 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw]  lg:mt-6 uppercase' to='../agence'>Agencey</Link>

      </div>
    </div>
  )
}