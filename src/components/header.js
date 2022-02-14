import * as React from 'react'
import Header from './styles/header';
import HeaderLogo from './headerLogo';
import MobileNav from './mobileNav';
import { useHeaderScroll } from '../lib/hooks';
import NavComponent from './nav';

 /* TODO 
  - Sort out html structure header
  - Center logo on mobile header
  - Tidy up scroll animation
*/

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
}

const HeaderComponent = ({ isOpen, toggleOpen, containerRef, height}) => {

  const scrolled = useHeaderScroll();

  return (
    <Header
      initial="visible"
      animate={scrolled ? "hidden" : "visible"}
      variants={variants}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}>
      <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} containerRef={containerRef} height={height} />  
      <HeaderLogo route="/" title="Three Seven Two" type="mobile" />
      <NavComponent />
    </Header>
  )
}

export default HeaderComponent;