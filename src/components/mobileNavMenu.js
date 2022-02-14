import * as React from 'react';
import  MobileNavItem from './mobileNavItem';
import MobileNavMenu from './styles/mobileNavMenu';

/* TODO
 - Move mobileNavLinks array into separate util file
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

const MobileNavMenuComponent = () => {
  return(
    <MobileNavMenu variants={variants}>
      {mobileNavLinks.map(link => (
        <MobileNavItem link={link} key={link.title} />
      ))}
    </MobileNavMenu>
  )
}

export default MobileNavMenuComponent;