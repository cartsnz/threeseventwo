import * as React from 'react'
import Layout from '../components/layout'
import Menu from '../components/menu';
import PlaceholderImage from '../components/placeholderImage';

const MenuPage = () => {

  return(
    <Layout pageTitle="Menus">
      <div>This is the menu page</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <Menu />
    </Layout>
  )
}

export default MenuPage;