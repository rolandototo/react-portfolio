import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocial'
import { useTranslation} from 'react-i18next'



const Header = () => {

  const {t} = useTranslation();

  return (
    <header>
        <div className="container header__container">
            <h5>{t('header.part1')}</h5>
            <h1>Rolando Escobar</h1>
            <h5 className="text-ligh">{t('header.part2')}</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>{t('header.Scroll')}</a>
        </div>
    </header>
  )
}

export default Header