"use client"

import Image from "next/image"
import AboutStyles from '../styles/about.module.css'
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutDescRef = useRef()
  const aboutImgRef = useRef()

  useLayoutEffect(() => {

    let about = gsap.context(() => {
        gsap.fromTo(aboutDescRef.current, {
            yPercent: 50,
        }, {
            scrollTrigger: {
                trigger: "#about", scrub: 1, yoyo: true
            },
            yPercent: 0,
        })

        gsap.fromTo(aboutImgRef.current, {
            yPercent: 100,
        }, {
            scrollTrigger: {
                trigger: "#about", scrub: 2, yoyo: true
            },
            yPercent: 0,
        })
    })

    return () => {
        about.revert();
    }

    }, [])


  return (
    <div className={AboutStyles.about} id="about">
      <div className={AboutStyles.about__wrapper}>
        <div className={AboutStyles.about__img} ref={aboutImgRef}>
        <Image
          src="/workimage.jpeg"
          width={500}
          height={500}
          alt="A drone shot of a lady in the basketball court"
          className={AboutStyles.about__image}
        />
        </div>

        <div className={AboutStyles.about__desc} ref={aboutDescRef}>
          <div className={AboutStyles.about__text}>
            <h3>AN <br /> ARTIST <br /> WITH A <br /> CAMERA</h3>
            <p>Niyi Fagbemi is all about exploring and sharing the beauty of Africa. He's a travel and lifestyle creator who's all about capturing stunning cinematic travel content from Africa. With his camera skills, he paints a vivid picture of Nigeria's culture and rich heritage making it pop with vibrant colors and life</p>
          </div>

          <div className={AboutStyles.about__text__img}>
            <Image 
              src="/workimage1.jpeg"
              width={500}
              height={500}
              alt="A man riding a horse"
              className={AboutStyles.about__image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About