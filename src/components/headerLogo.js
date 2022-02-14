import * as React from 'react'
import { Link } from 'gatsby'
import HeaderLogoStyles from './styles/headerLogo'
import PlaceholderImage from './placeholderImage'

/* TODO
 - Bring in image to use as logo
*/

const HeaderLogo = ({ title, route, type }) => {
  return (
    <HeaderLogoStyles className={type == 'mobile' ? 'medium-up--hide' : ''}>
      <Link to={route}>
        <PlaceholderImage height='75px' width='150px' color='#3d5588'/>
      </Link>
    </HeaderLogoStyles>
  )
}

export default HeaderLogo;