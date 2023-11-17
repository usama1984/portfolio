import React from 'react'
import './About.css'
import Me from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { LuFolderClosed } from 'react-icons/lu'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About Me'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <LuFolderClosed className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nam, deserunt molestiae delectus ipsum consectetur enim error quis ad quae quam earum officiis asperiores blanditiis minima! Mollitia perferendis optio corrupti!</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About