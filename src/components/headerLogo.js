import * as React from 'react'
import { Link } from 'gatsby'
import HeaderLogoStyles from './styles/headerLogo'
import PlaceholderImage from './placeholderImage'

const HeaderLogo = ({ title, route }) => {
  return (
    <HeaderLogoStyles>
      <Link to={route}>
        <PlaceholderImage height='75px' width='150px' color='#176bd1'/>
      </Link>
    </HeaderLogoStyles>
  )
}

export default HeaderLogo;