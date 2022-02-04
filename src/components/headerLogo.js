import * as React from 'react'
import { Link } from 'gatsby'
import HeaderLogoStyles from './styles/headerLogo'

const HeaderLogo = ({ title, route }) => {
  return (
    <HeaderLogoStyles>
      <Link to={route}>
        <span>Placeholder Image</span>
      </Link>
    </HeaderLogoStyles>
  )
}

export default HeaderLogo;