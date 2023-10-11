"use client"

import Link from "next/link"
import Image from "next/image"
import  HeroStyles from '../styles/hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
  const heroRef = useRef()
  const heroRefTop = useRef()
  const heroRefBottom = useRef()
  const heroNavRef = useRef()
  const heroIconRef = useRef()

  useLayoutEffect(() => {

    let hero = gsap.context(() => {
      gsap.set(heroRef.current, {opacity: 0})
      gsap.to(heroRef.current, {duration: 1.5, delay: 0.5, opacity: 1})

      gsap.to(heroRefTop.current, {
        opacity: 0,
        x: -500,
        ease: "none",
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: heroRefBottom.current,
          start: "top center",
          end: "bottom top",
          scrub: 2
      }
      })

      gsap.to(heroRefBottom.current, {
        opacity: 0,
        x: 500,
        ease: "none",
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom top",
          scrub: 2
      }
      })

      gsap.to(heroNavRef.current, {
        opacity: 0,
        y: 200,
        duration: 1.5,
        delay: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRefBottom.current,
          start: "top center",
          end: "bottom top",
          scrub: 2
      }
      })

      gsap.to(heroIconRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2
      })

    })

    return () => {
        hero.revert();
    }

    }, [])

  return (
            <div className={HeroStyles.hero} ref={heroRef} >
      <div className={HeroStyles.hero__wrapper}>
        <nav className={HeroStyles.nav} ref={heroNavRef}>
          <div className={HeroStyles.logo}>
            <Link href="/">NIYI FAGBEMI</Link>
          </div>

          <div className={HeroStyles.nav__menu}>
            <Link href="/#about" className="hidden md:flex">ABOUT</Link>
            <Link href="/#work" className="hidden md:flex">WORK</Link>
            <Link href="/archive">ARCHIVE</Link>
          </div>
        </nav>


      <section className={HeroStyles.hero__body}>
        <div className={HeroStyles.hero__body__wrapper}>
        <div className={HeroStyles.hero__text__top} ref={heroRefTop}>
          <h2>DOCUMENTARY <br /> FILMMAKER</h2>
        </div>
        
        <div className={HeroStyles.hero__image}>
          <Image 
          src="/niyif2.jpg"
          width={500}
          height={500}
          alt="Picture of Niyi Fagbemi"
          className={HeroStyles.hero__img}
          />
        </div>

        <div className={HeroStyles.hero__text__bottom} ref={heroRefBottom}>
          <h2>NIYI FAGBEMI</h2>
        </div>
        </div>

        <div className={HeroStyles.hero__icon} ref={heroIconRef}>
            <AiOutlineArrowDown />
          </div>
      </section>
      </div>
    </div>
          )
        }

export default Hero