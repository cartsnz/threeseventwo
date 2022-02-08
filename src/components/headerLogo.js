import * as React from 'react'
import { Link } from 'gatsby'
import HeaderLogoStyles from './styles/headerLogo'
import PlaceholderImage from './placeholderImage'

const HeaderLogo = ({ title, route }) => {
  return (
    <HeaderLogoStyles>
      <Link to={route}>
        <PlaceholderImage height='100px' width='200px' color='#eee'/>
      </Link>
    </HeaderLogoStyles>
  )
}

export default HeaderLogo;