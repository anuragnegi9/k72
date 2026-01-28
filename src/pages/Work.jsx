import React from 'react'
import WorkCard from "../components/work/WorkCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Work = () => {

  const workImage = [
    {
      image1: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c',
      image2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      image2: 'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    }
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from('.heroImg', {
      height: '100px',
      stagger: {
        amount: 0.2
      },
      scrollTrigger: {
        trigger: '.imagesDiv',
        // markers: true,
        start: 'top 71%',
        end: 'top -150%',
        scrub: true
      }
    });
  })


  return (
    <div className='lg:p-3 p-2 mb-[100vh]'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] uppercase lg:text-[13vw] text-7xl'>Work</h2>
      </div>

      <div className='-lg:mt-20 imagesDiv '>
        {workImage.map(function (elem, idx) {
          <WorkCard image1={elem.image1} image2={elem.image2} />
          return <div key={idx} className='heroImg w-full lg:h-800px mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <WorkCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>

    </div>

  )
}

export default Work
