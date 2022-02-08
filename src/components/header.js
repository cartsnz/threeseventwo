import * as React from 'react'
import HeaderStyles from './styles/header';
import HeaderLogo from './headerLogo';
import Nav from './nav'
import MobileNav from './mobileNav';
import MobileNavMenu from './mobileNavMenu';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = ({ open, setOpen, node }) => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) { // Get height of header element and use this
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <HeaderStyles scrolled={scrolled}>
      <div ref={node} className='medium-up--hide'>
        <MobileNav open={open} setOpen={setOpen} />
        <MobileNavMenu open={open} />
      </div>
      <div className='medium-up--hide'>
        <HeaderLogo route="/" title="Three Seven Two" />
      </div>
      <Nav />
    </HeaderStyles>
  )
}

export default Header;