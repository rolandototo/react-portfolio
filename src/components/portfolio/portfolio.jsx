import React from 'react'
import './portfolio.css'
import Arti from './portarticle'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <Arti imgTranfer={IMG1} titlePort ={"This is a portfolio item title"} urlPortGit={"https://github.com"}/>
        <Arti imgTranfer={IMG2} titlePort ={"This is a portfolio item title"} urlPortGit={"https://github.com"}/>
        <Arti imgTranfer={IMG3} titlePort ={"This is a portfolio item title"} urlPortGit={"https://github.com"}/>
        <Arti imgTranfer={IMG4} titlePort ={"This is a portfolio item title"} urlPortGit={"https://github.com"}/>
        <Arti imgTranfer={IMG5} titlePort ={"This is a portfolio item title"} urlPortGit={"https://github.com"}/>
        <Arti imgTranfer={IMG6} titlePort ={"This is a portfolio item title"} urlPortGit={"https://github.com"}/>
        </div>
    </section>
  )
}

export default Portfolio