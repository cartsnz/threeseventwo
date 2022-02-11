import * as React from 'react'
import NavStyles from './styles/nav';
import NavItem from './navItem';
import HeaderLogo from './headerLogo';

const Nav = () => {
  return(
    <NavStyles>
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
    </NavStyles>
  )
}

export default Nav;