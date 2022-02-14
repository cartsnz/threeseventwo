import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './menuToggle';
import MobileNavMenuComponent from './mobileNavMenu';

/* TODO:
  - Tidy up animation (timing)
*/

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    backgroundColor: "#3d5588",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    backgroundColor: "#FFF",
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
      className="medium-up--hide"
      >
      <motion.div className='background' variants={sidebar} />
      <MobileNavMenuComponent />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default MobileNav;