"use client"

import Link from "next/link"
import WorkStyles from '../styles/work.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const workBgRef = useRef()

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
            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={WorkStyles.work__video}>
              <video autoPlay playsInline loop muted>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className={WorkStyles.work__video__title}>
          <button className={WorkStyles.work__arrow}>
          <AiOutlineArrowLeft />
          </button>
          
          <h4>Video Title</h4>
          
          <button className={WorkStyles.work__arrow}>
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