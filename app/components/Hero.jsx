import Link from "next/link"
import Image from "next/image"
import  HeroStyles from '../styles/hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai'


const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <div className={HeroStyles.hero__wrapper}>
        <nav className={HeroStyles.nav}>
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
        <div className={HeroStyles.hero__text__top}>
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

        <div className={HeroStyles.hero__text__bottom}>
          <h2>NIYI FAGBEMI</h2>
        </div>
        </div>

        <div className={HeroStyles.hero__icon}>
            <AiOutlineArrowDown />
          </div>
      </section>
      </div>
    </div>
  )
}

export default Hero