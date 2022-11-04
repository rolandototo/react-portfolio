import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'


const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rolando-escobar/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/rolandototo" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default headerSocial