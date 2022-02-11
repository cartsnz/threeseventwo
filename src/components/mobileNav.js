import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../lib/use-dimensions';
import { MenuToggle } from './menuToggle';
import MobileNavMenu from './mobileNavMenu';

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
      delay: 0.5,
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
      exit={"closed"}
      className="medium-up--hide"
      >
      <motion.div className='background' variants={sidebar} />
      <MobileNavMenu />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default MobileNav;