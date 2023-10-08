"use client"

import Link from "next/link"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import ArchiveStyles from "../styles/archive.module.css"

const archive = () => {
  return (
    <div className={ArchiveStyles.archive}>
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
            heightRatio: '100%',
            perMove: 1,
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 1500,
            drag: 'free',
            gap: '1rem',
            breakpoints: {
              640: { perPage: 1.2 }
            }
          }}
          >
              <SplideSlide>
                <img src="/niyif.jpg" alt="Image 1"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/niyif.jpg" alt="Image 1"/>
              </SplideSlide>
              <SplideSlide>
                <img src="/niyif.jpg" alt="Image 1"/>
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