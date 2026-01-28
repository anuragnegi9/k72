import React from 'react'

const WorkCard = (props) => {
  return (
    <>
      <div className='lg:w-1/2 h-full group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.image1} alt="" />
        <div className=' opacity-0 transition-all absolute h-full w-full flex group-hover:opacity-100 items-center justify-center top-0 left-0 bg-black/20' >
          <h2 className='uppercase text-6xl font-[font1] border-3 pt-2 px-4 text-white rounded-full'>view project</h2></div>
      </div>
      <div className='lg:w-1/2 h-full group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.image2} alt="" />
        <div className=' opacity-0 transition-all absolute h-full w-full flex group-hover:opacity-100 items-center justify-center top-0 left-0 bg-black/20' >
          <h2 className='uppercase text-6xl font-[font1] border-3 pt-2 px-4 text-white rounded-full'>view project</h2></div>
      </div>
    </>
  )
}

export default WorkCard