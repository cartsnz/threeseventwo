import * as React from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './menuToggle';
import MobileNavMenuComponent from './mobileNavMenu';
import { theme } from '../lib/theme';
import { useDimensions } from '../lib/use-dimensions';
import { useRef } from 'react';

/* TODO:
  - Tidy up animation (timing)
  - Stagger children - issue is related to the component only being mounted when isOpen
  - This is used to lock the body scroll so need to either resolve it or prioritise one effect
*/

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    backgroundColor: theme.primaryDark,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    backgroundColor: theme.primaryLight,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

const MobileNav = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false} 
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
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