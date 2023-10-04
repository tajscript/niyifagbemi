import Link from "next/link"
import Image from "next/image"
import ArchiveStyles from "../styles/archive.module.css"

export const metadata = {
  title: 'Niyi Fagbemi - Archive',
  description: 'A Fan site for Niyi Fagbemi',
}

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
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>
          <div className={ArchiveStyles.archive__image}>
            <Image
            width={500}
            height={500}
            src="/niyif.jpg"
            />
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default archive