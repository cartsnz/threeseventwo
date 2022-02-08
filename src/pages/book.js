import * as React from 'react'
import Layout from '../components/layout'
import PlaceholderImage from '../components/placeholderImage';

const BookingPage = () => {
  return (
    <Layout pageTitle="Bookings">
      <p>This is the booking page</p>
      <PlaceholderImage width="100%" height="500px" />
    </Layout>
  )
}

export default BookingPage;