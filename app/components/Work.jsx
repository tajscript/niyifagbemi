"use client"

import Link from "next/link"
import WorkStyles from '../styles/work.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { gsap } from "gsap"
import { useLayoutEffect, useRef, useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const workBgRef = useRef()
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [showTitle, setShowTitle] = useState(true)

  const videos = [
    { src: '/video2.mp4', title: 'Video 1 Title' },
    { src: '/video2.mp4', title: 'Video 2 Title' },
    { src: '/video2.mp4', title: 'Video 3 Title' },
    { src: '/video2.mp4', title: 'Video 4 Title' },
    { src: '/niyifagbemi.mp4', title: 'Video 5 Title' },
    { src: '/video2.mp4', title: 'Video 6 Title' },
    { src: '/video2.mp4', title: 'Video 7 Title' },
    { src: '/video2.mp4', title: 'Video 8 Title' },
    { src: '/video2.mp4', title: 'Video 9 Title' },
    { src: '/niyifagbemi.mp4', title: 'Video 10 Title' },
  ]

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : videos.length - 1))
  }

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1))
      }


  useLayoutEffect(() => {

    let about = gsap.context(() => {
      gsap.fromTo( ["#work", "#about"], {
        backgroundColor: "white"
    }, {
        scrollTrigger: {
            trigger: workBgRef.current,
            scrub: 2,
            end: "bottom bottom",
        },
        backgroundColor: "black",
        color: "white",
        duration: 2,
        yoyo: true
    })
    })

    return () => {
        about.revert();
    }

    }, [])

  return (
    <div className={WorkStyles.work} id="work">
      <div className={WorkStyles.work__wrapper}>
        <div className={WorkStyles.work__nav}>
          <h3>NIYI FAGBEMI</h3>
          <Link href="https://youtube.com/" className={WorkStyles.work__nav__link}>YOUTUBE</Link>
        </div>

        <div className={WorkStyles.work__container}>
        <div className={WorkStyles.work__video__wrapper}>
          <div className={WorkStyles.work__videos} ref={workBgRef}>
            {videos.map((video, index) => (
              <div
                className={WorkStyles.work__video}
                key={index}
                >
                  <video controls autoPlay playsInline loop muted={index !== currentVideoIndex}>
                    <source src={video.src} type="video/mp4"/>
                  </video>
              </div>
            ))
            }
          </div>

          <div className={WorkStyles.work__video__title}>
          <button className={WorkStyles.work__arrow} onClick={handlePrevClick}>
          <AiOutlineArrowLeft />
          </button>
          
          {showTitle && <h4>{videos[currentVideoIndex].title}</h4>}
          
          <button className={WorkStyles.work__arrow} onClick={handleNextClick}>
          <AiOutlineArrowRight />
          </button>
          </div>
          
        </div>
        </div>

      </div>
    </div>
  )
}

export default Work