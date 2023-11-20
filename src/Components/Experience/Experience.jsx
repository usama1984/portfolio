import React from 'react'
import './Experience.css'
import { HiBadgeCheck } from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience