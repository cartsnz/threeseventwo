import * as React from 'react'
import HeaderStyles from './styles/header';
import HeaderLogo from './headerLogo';
import Nav from './nav'
import MobileNav from './mobileNav';
import MobileNavMenu from './mobileNavMenu';
import { useState } from 'react';
import { useEffect } from 'react';

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
}

const Header = ({ isOpen, toggleOpen, containerRef, height}) => {

  const [scrolled, setScrolled] = useState(false);

  let prevScroll = window.scrollY;
  console.log("prevScroll: " + prevScroll);

  const handleScroll = () => {
    const currScroll = window.scrollY;
    console.log("currScroll: " + currScroll);
    const isScrolled = prevScroll < currScroll;
    setScrolled(isScrolled);
    prevScroll = currScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  // TODO - Sort out html structure of this

  return (
    <HeaderStyles scrolled={scrolled}
      initial="visible"
      animate={scrolled ? "hidden" : "visible"}
      variants={variants}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}>
      <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} containerRef={containerRef} height={height} />  
      <HeaderLogo route="/" title="Three Seven Two" />
      <Nav />
    </HeaderStyles>
  )
}

export default Header;