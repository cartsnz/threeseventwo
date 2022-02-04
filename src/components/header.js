import * as React from 'react'
import HeaderStyles from './styles/header';
import HeaderLogo from './headerLogo';
import Nav from './nav'
import MobileNav from './mobileNav';
import MobileNavMenu from './mobileNavMenu';

const Header = ({ open, setOpen, node }) => {
  return (
    <HeaderStyles>
      <div ref={node}>
        <MobileNav open={open} setOpen={setOpen} />
        <MobileNavMenu open={open} />
      </div>
      <HeaderLogo route="/" title="Three Seven Two" />
      <Nav />
    </HeaderStyles>
  )
}

export default Header;