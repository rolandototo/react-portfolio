import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useTranslation} from 'react-i18next'

const About = () => {
  const {t} = useTranslation();
  return (
    <section id='about'>
      <h5>{t('about.part1')}</h5>
      <h2>{t('about.part2')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>{t('about.box1')}</h5>
              <small>{t('about.subBox1')}</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>{t('about.box2')}</h5>
              <small>{t('about.subBox2')}</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>{t('about.box3')}</h5>
              <small>{t('about.subBox3')}</small>
            </article>
          </div>
          <p>
          {t('about.text')}
          </p>
          <a href="#contact" className='btn btn-primary'>{t('about.btn')}</a>
        </div>
      </div>
    </section>
  )
}

export default About