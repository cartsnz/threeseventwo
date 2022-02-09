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
      <div className='medium-up--hide'>
        <div ref={node}>
          <MobileNav open={open} setOpen={setOpen} />
          <MobileNavMenu open={open} />
        </div>
        <div>
          <HeaderLogo route="/" title="Three Seven Two" />
        </div>
      </div>
      <Nav />
    </HeaderStyles>
  )
}

export default Header;