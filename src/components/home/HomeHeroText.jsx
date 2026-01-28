import React from 'react'
import Video from './Video'
import { useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const HomeHeroText = () => {


  const textRef = useRef(null)


  return (
    <div className=" font-[font1] lg:mt-0 mt-55 pt-4 text-center ">
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8.5vw] leading-[10vw]">
        The spark for
      </div>

      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8.5vw] leading-[10vw]">
        all
        <div className="lg:h-[7vw] h-[9vw] lg:w-[16vw] w-[20vw] rounded-full -mt-2.8 overflow-hidden">
          <Video />
        </div>
        things
      </div>

      <div ref={textRef}
        className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8.5vw] leading-[10vw]">
        creative
      </div>
    </div>
  );
}

export default HomeHeroText