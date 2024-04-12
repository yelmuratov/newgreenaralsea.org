import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer data-aos="fade-up" className="mt-12 py-12 bg-[#57cc99] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-24">
          <ul className="flex flex-wrap justify-center md:justify-start">
            <li className="roboto-regular uppercase mx-2 md:mx-8 text-base md:text-xl mb-4 md:mb-0"><Link to="/FAQ">FAQ</Link></li>
            <li className="roboto-regular uppercase mx-2 md:mx-8 text-base md:text-xl mb-4 md:mb-0"><Link to="/ourteam">UNDP Accelerator Lab</Link></li>
            <li className="roboto-regular uppercase mx-2 md:mx-8 text-base md:text-xl mb-4 md:mb-0"><Link to="/contact">{t("nav.contact")}</Link></li>
            <li className="roboto-regular uppercase mx-2 md:mx-8 text-base md:text-xl mb-4 md:mb-0"><a href="https://www.undp.org/copyright-terms-use">{t("nav.termsOfUse")}</a></li>
          </ul>
          <ul className="flex justify-center md:justify-end mt-4 md:mt-0">
            <li className="mx-2 md:mx-8"><a href="https://www.facebook.com/GreenAralSea/" target="blank"><i className="fa-brands text-base md:text-xl fa-square-facebook"></i></a></li>
            <li className="mx-2 md:mx-8"><a href="https://twitter.com/UNDP_Uzbekistan" target="blank"><i className="fa-brands text-base md:text-xl fa-x-twitter"></i></a></li>
            <li className="mx-2 md:mx-8"><a href="https://www.instagram.com/greenaralsea/" target="blank"><i className="fa-brands text-base md:text-xl fa-instagram"></i></a></li>
            <li className="mx-2 md:mx-8"><a href="https://www.youtube.com/user/UNDPUzb" target="blank"><i className="fa-brands text-base md:text-xl fa-youtube"></i></a></li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer