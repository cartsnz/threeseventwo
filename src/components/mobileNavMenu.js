import * as React from 'react';
import  MobileNavItem from './mobileNavItem';
import MobileNavMenu from './styles/mobileNavMenu';
import { navigationItems } from '../lib/navigationItems';

/* TODO
 - Add social links below menu items
 - Tidy up animation (timing)
*/

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2}
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1}
  }
};

const MobileNavMenuComponent = () => {
  return(
    <MobileNavMenu variants={variants}>
      {navigationItems.map(link => (
        <MobileNavItem link={link} key={link.title} />
      ))}
    </MobileNavMenu>
  )
}

export default MobileNavMenuComponent;