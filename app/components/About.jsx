import Image from "next/image"
import AboutStyles from '../styles/about.module.css'

const About = () => {
  return (
    <div className={AboutStyles.about} id="about">
      <div className={AboutStyles.about__wrapper}>
        <div className={AboutStyles.about__img}>
        <Image
          src="/workimage.jpeg"
          width={500}
          height={500}
          alt="A drone shot of a lady in the basketball court"
          className={AboutStyles.about__image}
        />
        </div>

        <div className={AboutStyles.about__desc}>
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