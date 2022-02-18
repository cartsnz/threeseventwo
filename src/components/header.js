import * as React from 'react'
import Header from './styles/header';
import HeaderLogo from './headerLogo';
import MobileNav from './mobileNav';
import { useHeaderScroll } from '../lib/hooks';
import NavComponent from './nav';

 /* TODO 
  - Sort out html structure header
  - Tidy up scroll animation - find a way for it not to break within the build process
*/

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
}

const HeaderComponent = () => {
  // const scrolled = useHeaderScroll();
  const scrolled = false;

  return (
    <Header
      initial="visible"
      animate={scrolled ? "hidden" : "visible"}
      variants={variants}
      className={scrolled ? "sticky" : "transparent"}
      >
      <MobileNav />  
      <HeaderLogo route="/" title="Three Seven Two" type="mobile" />
      <div className='mobile-nav-spacer medium-up--hide'></div>
      <NavComponent />
    </Header>
  )
}

export default HeaderComponent;