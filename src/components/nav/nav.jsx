import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import { useTranslation} from 'react-i18next';

const lngs = {
  en: { nativeName: 'En' },
  es: { nativeName: 'Es ' }
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const {i18n } = useTranslation();
  return (
    <>

    <nav>
      <a href="#top" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
    <div className='nav__switcher_lang'>
          {Object.keys(lngs).map((lng) => (
            <button className="nav__lang" key={lng}
            style={{
              backgroundColor: i18n.resolvedLanguage === lng ? 'white' : 'transparent',
              color : i18n.resolvedLanguage === lng ? 'black' : 'white',
              borderRadius : i18n.resolvedLanguage === lng ? '2rem' : '',
              padding : i18n.resolvedLanguage === lng ? '0.5rem' : ''}}
              type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
    </div>
    </>

  )
}

export default Nav