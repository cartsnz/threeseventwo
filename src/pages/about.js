import * as React from 'react';
import Layout from '../components/layout';
import PlaceholderImage from '../components/placeholderImage';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
       <div>This is the about us page</div>
       <div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in luctus nibh, in ornare lorem. In vel sollicitudin turpis. Nullam finibus nulla vitae ante placerat mollis. Aliquam urna nibh, placerat in lacus quis, tempus pretium nibh. Praesent vitae interdum eros. Donec sed lorem ac arcu aliquet convallis ut nec purus. Nullam hendrerit egestas tortor quis euismod. Duis ex nibh, mollis vel dictum quis, porttitor nec libero. Etiam tristique finibus elit a lacinia. Nullam nec erat maximus, varius nunc non, sodales nibh. Morbi sit amet faucibus augue, vitae auctor mauris. Sed eu purus nec risus porta laoreet vitae quis nulla. Integer et dapibus libero. Curabitur eu luctus quam. Integer et sollicitudin ipsum. Vivamus ut metus sit amet enim aliquam fermentum vitae sit amet sapien. Mauris augue mauris, porttitor ac viverra a, bibendum eget arcu. Duis sed justo tempor, tempor nulla sagittis, rhoncus dui. Sed id ipsum sed enim hendrerit tincidunt a at massa. Aliquam tempus laoreet sapien. Sed lorem ante, blandit ut velit sit amet, sollicitudin accumsan risus. Curabitur eu consequat neque. Mauris rhoncus, lorem ac viverra accumsan, augue augue congue massa, eu tempor eros magna et lectus. Praesent non iaculis lectus. Integer nisl est, pharetra sit amet sem non, accumsan dignissim tortor. Morbi semper, diam a maximus tempus, leo diam fermentum odio, feugiat porttitor neque lectus eu arcu. Aenean ut risus ut magna molestie tristique quis in eros.
       </div>
       <PlaceholderImage height="300px" width="100%" />
    </Layout>
  )
}

export default AboutPage;