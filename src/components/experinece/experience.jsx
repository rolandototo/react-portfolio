import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Javascript</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Boostrap</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Tailwind</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
             <div>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>React</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END FRONTED */}
        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <div>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node JS</h4>
                <small className='text-ligth'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <div>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MongoDB</h4>
                <small className='text-ligth'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <div>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>PHP</h4>
                <small className='text-ligth'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <div>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MySQL</h4>
                <small className='text-ligth'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <div>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Python</h4>
                <small className='text-ligth'>Experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience