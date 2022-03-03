module.exports = {
  siteMetadata: {
    title: `Three Seven Two`,
    description: `372 (Three Seven Two) Waiheke Restaurant and Bar on beautiful Onetangi Beach by Luke and Helen Carter`,
    url: `https://www.threeseventwomain.gatsbyjs.io`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Three Seven Two`,
        short_name: `372`,
        start_url: `/`,
        background_color: `#fcfdff`,
        theme_color: `#3d5588`,
        icon: `src/images/icon.png`
      }
    }
  ]
};