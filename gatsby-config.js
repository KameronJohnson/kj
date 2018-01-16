module.exports = {
  siteMetadata: {
    title: `KJ`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
            `gatsby-plugin-sass`,
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
              }
            },
            {
              resolve: `gatsby-plugin-favicon`,
              options: {
                logo: "./src/images/favicon.png",
                injectHTML: true,
                icons: {
                  android: false,
                  appleIcon: false,
                  appleStartup: false,
                  coast: false,
                  favicons: false,
                  firefox: false,
                  twitter: false,
                  yandex: false,
                  windows: false
                }
              }
            },
            'gatsby-transformer-remark'
          ],
}
