import * as React from 'react'
import Layout from '../components/layout'
import Menu from '../components/menu';
import PlaceholderImage from '../components/placeholderImage';

const MenuPage = () => {

  return(
    <Layout pageTitle="Menus">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <Menu />
      <br />
      <div style={{"display": "flex", "gridGap": "1rem"}}>
        <PlaceholderImage height="200px" width="100%" />
        <PlaceholderImage height="200px" width="100%" />
        <PlaceholderImage height="200px" width="100%" />
      </div>
    </Layout>
  )
}

export default MenuPage;