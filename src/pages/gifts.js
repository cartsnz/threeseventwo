import * as React from 'react'
import Layout from '../components/layout'
import PlaceholderImage from '../components/placeholderImage';

const GiftVoucherPage = () => {
  return (
    <Layout pageTitle="Gift Vouchers">
      <p>This is the Gift Vouchers page</p>
      <PlaceholderImage height="500px" width="100%" />
      <br />
      <div style={{"display": "flex", "gridGap": "1rem"}}>
        <PlaceholderImage height="200px" width="100%" />
        <PlaceholderImage height="200px" width="100%" />
        <PlaceholderImage height="200px" width="100%" />
      </div>
    </Layout>
  )
}

export default GiftVoucherPage;