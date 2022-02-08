import * as React from 'react'
import Layout from '../components/layout'
import PlaceholderImage from '../components/placeholderImage';

const MenuPage = () => {
  return(
    <Layout pageTitle="Menus">
      <div>This is the menu page</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '10px'}}>
      <PlaceholderImage height="700px" width="100%" />
      <PlaceholderImage height="700px" width="100%" />
      </div>
    </Layout>
  )
}

export default MenuPage;