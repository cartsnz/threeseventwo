import * as React from 'react';
import { MobileNavItem } from './mobileNavItem';
import NavItem from './navItem';
import MobileNavMenuStyles from './styles/mobileNavMenu';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2}
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1}
  }
};

// TODO - Replicate for desktop nav and move into separate lib file
const mobileNavLinks = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "About us",
    route: "/about"
  },
  {
    title: "Menus",
    route: "/menu"
  },
  {
    title: "Book",
    route: "/book"
  },
  {
    title: "Where we are",
    route: "/location"
  },
  {
    title: "Gift vouchers",
    route: "/gifts"
  }
];

// TODO - Add social links below menu items

const MobileNavMenu = () => {
  return(
    <MobileNavMenuStyles variants={variants}>
      {mobileNavLinks.map(link => (
        <MobileNavItem link={link} key={link.title} />
      ))}
    </MobileNavMenuStyles>
  )
}

export default MobileNavMenu;