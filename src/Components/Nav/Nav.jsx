import React, { useState, useEffect } from "react";
import { Link, Events, animateScroll as scroll } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine} from 'react-icons/ri'
import { BiMessageDetail } from "react-icons/bi";
import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveNav(to);
  };

  return (
    <nav>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => handleSetActive("home")}
        className={activeNav === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => handleSetActive("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>

      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => handleSetActive("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <BiBook />
      </Link>

      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => handleSetActive("portfolio")}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => handleSetActive("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </Link>
    </nav>
  );
};

export default Nav;

// import React from 'react'
// import './Nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
// import { RiServiceLine} from 'react-icons/ri'
// import { BiMessageSquareDetail } from 'react-icons/bi'
// import { useState } from 'react'

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
//       <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
//       <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
//       <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
//       <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
//     </nav>
//   )
// }

// export default Nav