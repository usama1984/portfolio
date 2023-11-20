import React from 'react'
import './Header.css'
import CTA from './CTA/Cta'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials/HeaderSocials'
import logo from '../../assets/Usama-Logo-croped.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Usama</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='Me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header