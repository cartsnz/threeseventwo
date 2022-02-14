import * as React from 'react'
import Nav from './styles/nav';
import NavItem from './navItem';
import HeaderLogo from './headerLogo';

/* TODO
 - Use array of list items from util file
 - Slice into two and add logo in center
*/

const NavComponent = () => {
  return(
    <Nav>
    <ul>
      <li>
       <NavItem title="Home" route="/" />
      </li>
      <li>
       <NavItem title="About us" route="/about" />
      </li>
      <li>
       <NavItem title="Menus" route="/menu" />
      </li>
      <li>
        <HeaderLogo title="ThreeSevenTwo" route="/" type="device" />
      </li>
      <li>
       <NavItem title="Book" route="/book" />
      </li>
      <li>
       <NavItem title="Where we are" route="/location" />
      </li>
      <li>
       <NavItem title="Gift Vouchers" route="/gifts" />
      </li>
    </ul>
    </Nav>
  )
}

export default NavComponent;