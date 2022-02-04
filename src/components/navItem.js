import * as React from 'react'
import { Link } from 'gatsby'

const NavItem = ({ title, route}) => {
  return(
    <Link to={route}>{title}</Link>
  )
}

export default NavItem;