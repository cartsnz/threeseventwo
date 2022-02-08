import * as React from 'react'
import Layout from '../components/layout'
import PlaceholderImage from '../components/placeholderImage';

const LocationPage = () => {
  return (
    <Layout pageTitle="Location">
      <p>This is the location page</p>
      <PlaceholderImage height="500px" width="100%" />
    </Layout>
  )
}

export default LocationPage;