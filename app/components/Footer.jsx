import Link from "next/link"
import FooterStyles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div id="footer" className={FooterStyles.footer}>
        <div className={FooterStyles.footer__wrapper}>
            <h4>A Fansite for Niyi Fagbemi © 2023</h4>
            <h4>This Website is Designed and Built by <span><Link href="https://twitter.com/tajscript" target="_blank">Taj</Link></span></h4>
            <Link href="mailto:ayomidejimoh247@gmail.com" className={FooterStyles.footer__link}>Request content removal</Link>
        </div>
    </div>
  )
}

export default Footer