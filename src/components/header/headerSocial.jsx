import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'


const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://gtihub.com" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FaDribbble/></a>
    </div>
  )
}

export default headerSocial