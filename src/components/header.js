import * as React from 'react'
import HeaderStyles from './styles/header';
import HeaderLogo from './headerLogo';
import Nav from './nav'
import MobileNav from './mobileNav';
import MobileNavMenu from './mobileNavMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHeaderScroll } from '../lib/hooks';

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
}

const Header = ({ isOpen, toggleOpen, containerRef, height}) => {

  const scrolled = useHeaderScroll();

  // TODO - Sort out html structure of this

  return (
    <HeaderStyles
      initial="visible"
      animate={scrolled ? "hidden" : "visible"}
      variants={variants}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}>
      <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} containerRef={containerRef} height={height} />  
      <HeaderLogo route="/" title="Three Seven Two" type="mobile" />
      <Nav />
    </HeaderStyles>
  )
}

export default Header;