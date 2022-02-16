import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './menuToggle';
import MobileNavMenuComponent from './mobileNavMenu';
import { theme } from '../lib/theme';

/* TODO:
  - Tidy up animation (timing)
*/

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    backgroundColor: theme.primaryDark,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    backgroundColor: theme.primaryLight,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const MobileNav = ({ isOpen, toggleOpen, containerRef, height}) => {
  return (
    <motion.nav
      initial={false} 
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      exit="closed"
      className="medium-up--hide mobile-nav-spacer"
      >
      <motion.div className='background' variants={sidebar} />
      {isOpen && (
      <MobileNavMenuComponent />
      )}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default MobileNav;