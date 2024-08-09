import React from 'react'
import './Experience.css'
import { HiBadgeCheck } from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='skills'>
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
              <small className='text-light'>4 Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>WordPress</h4>
              <small className='text-light'>5+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>4 Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>4 Years</small>
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
              <small className='text-light'>3+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>6 Months</small>
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
              <h4>Nest.js</h4>
              <small className='text-light'>2 Months</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Postgres SQL</h4>
              <small className='text-light'>2 Months</small>
              </div>
            </article>

          </div>

          <h3 className='mt-2'>Other Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>PhotoShop</h4>
              <small className='text-light'>2+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Illustrator</h4>
              <small className='text-light'>2+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Figma</h4>
              <small className='text-light'>2 Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Canva</h4>
              <small className='text-light'>2 Years</small>
              </div>
            </article>
          </div>
        </div>

        {/* <div className="experience__other">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>PhotoShop</h4>
              <small className='text-light'>2+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Illustrator</h4>
              <small className='text-light'>2+ Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Figma</h4>
              <small className='text-light'>2 Years</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4>Canva</h4>
              <small className='text-light'>2 Years</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience