"use client"

import Link from "next/link"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import ArchiveStyles from "../styles/archive.module.css"
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"

const archive = () => {
  const archiveRef = useRef()

  useLayoutEffect(() => {

    let archiveAnim = gsap.context(() => {
      gsap.set(archiveRef.current, {opacity: 0})
      gsap.to(archiveRef.current, {duration: 1.5, opacity: 1})
    })

    return () => {
        archiveAnim.revert();
    }
    }, [])

  return (
    <div className={ArchiveStyles.archive} ref={archiveRef}>
      <div className={ArchiveStyles.archive__wrapper}>
        <div className={ArchiveStyles.archive__link}>
          <Link href="/">Go Back</Link>
        </div>

        <div className={ArchiveStyles.archive__images}>
        <div className={ArchiveStyles.archive__images__wrapper}>

          <div className={ArchiveStyles.archive__image}>
          <Splide aria-label="" 
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            heightRatio: 0.4,
            arrows: false,
            pagination: false,
            autoplay: true,
            drag: false,
            start: 0,
            interval: 1000,
            pauseOnHover: false,
            gap: '1rem',
            breakpoints: {
              640: { perPage: 1.2, heightRatio : 1.0 }
            }
          }}
          >
              <SplideSlide>
                <img src="/1.jpeg" alt="Archive 1"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/2.jpeg" alt="Archive 2"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/3.jpeg" alt="Archive 3"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/4.jpeg" alt="Archive 4"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/5.jpeg" alt="Archive 5"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/6.jpeg" alt="Archive 6"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/7.jpeg" alt="Archive 7"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/8.jpeg" alt="Archive 8"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/9.jpeg" alt="Archive 9"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/10.jpeg" alt="Archive 10"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/11.jpeg" alt="Archive 11"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/12.jpeg" alt="Archive 12"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/13.jpeg" alt="Archive 13"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/14.jpeg" alt="Archive 14"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/15.jpeg" alt="Archive 15"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/16.jpeg" alt="Archive 16"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/17.jpeg" alt="Archive 17"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/18.jpeg" alt="Archive 18"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/19.jpeg" alt="Archive 19"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/20.jpeg" alt="Archive 20"/>
              </SplideSlide>
          </Splide>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default archive