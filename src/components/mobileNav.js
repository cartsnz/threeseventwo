import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../lib/use-dimensions';
import { MenuToggle } from './menuToggle';
import MobileNavMenu from './mobileNavMenu';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const MobileNav = ({ isOpen, toggleOpen, containerRef, height}) => {
  //const [isOpen, toggleOpen] = useCycle(false, true);
  //const containerRef = useRef(null);
  //const { height } = useDimensions(containerRef);

  // Add function here which will call toggleOpen as well as toggling overflow:hidden onto the body

  const handleOpen = () => {
    toggleOpen();
    if (!isOpen) {
      document.querySelector('body').classList.add('overflow-hidden');
    } else {
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  }

  return (
    <motion.nav
      initial={false} 
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      >
      <motion.div className='background' variants={sidebar} />
      <MobileNavMenu />
      <MenuToggle toggle={() => handleOpen()} />
    </motion.nav>
  )
}

export default MobileNav;