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
  const workRef = useRef()

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const videoProperties = [
    {
      id: 1,
      title: "London Fashion Week",
      src: "/video11.mp4"
    },
    {
      id: 2,
      title: "Apapa, Lagos",
      src: "/video1.mp4"
    },
    {
      id: 3,
      title: "River Noire, Benin Republic",
      src: "/video3.mp4"
    },
    {
      id: 4,
      title: "Lagos Cathedral",
      src: "/video4.mp4"
    },
    {
      id: 5,
      title: "Ojude Oba, Ijebu",
      src: "/video5.mp4"
    },
    {
      id: 6,
      title: "National Mosque, Abuja",
      src: "/video6.mp4"
    },
    {
      id: 7,
      title: "Calabar Carnival",
      src: "/video7.mp4"
    },
    {
      id: 8,
      title: "Makoko, Lagos",
      src: "/video8.mp4"
    },
    {
      id: 9,
      title: "Mombasa, Kenya",
      src: "/video9.mp4"
    },
    {
      id: 10,
      title: "Tanzania",
      src: "/video10.mp4"
    },
  ]

  const nextVideo = () => {
    setIsTransitioning(true)
    setTimeout(() => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex + 1) % videoProperties.length
    )
    setIsTransitioning(false);
    }, 500)
  }

  const prevVideo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex - 1 + videoProperties.length) % videoProperties.length
    )
    setIsTransitioning(false);
    }, 500)
  }

  const currentVideo = videoProperties[currentVideoIndex];

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

    gsap.fromTo(workRef.current, {
      yPercent: 20,
  }, {
      scrollTrigger: {
          trigger: "#work", scrub: 2, yoyo: true
      },
      yPercent: 0,
  })
    })

    return () => {
        about.revert();
    }

    }, [])

  return (
    <div className={WorkStyles.work} id="work">
      <div className={WorkStyles.work__wrapper} ref={workRef}>
        <div className={WorkStyles.work__nav}>
          <h3>NIYI FAGBEMI</h3>
          <Link href="https://youtube.com/" className={WorkStyles.work__nav__link}>YOUTUBE</Link>
        </div>

        <div className={WorkStyles.work__container}>
        <div className={WorkStyles.work__videos} ref={workBgRef}>
          <div className={WorkStyles.work__video__wrapper}>
          <div className={WorkStyles.work__video__container}>
            <div className={`${WorkStyles.work__video} ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <video autoPlay muted playsInline loop key={currentVideo.src}>
                <source src={currentVideo.src} type="video/mp4"/>
              </video>
            </div>
            </div>

            <div className={WorkStyles.video__title__wrapper}>
              <button className={WorkStyles.work__icon} onClick={prevVideo}>
                <AiOutlineArrowLeft/>
              </button>

              <div className={`${WorkStyles.video__title} ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}><h4>{currentVideo.title}</h4></div>

              <button className={WorkStyles.work__icon} onClick={nextVideo}>
                <AiOutlineArrowRight/>
              </button>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Work