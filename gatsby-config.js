module.exports = {
  siteMetadata: {
    title: 'International Quidditch Association',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'iqasport.org',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
      },
      includedRoutes: [
        "**/*/*/categories",
        "**/*/*/posts",
        "**/*/*/pages",
        "**/*/*/media",
        "**/*/*/tags",
        "**/*/*/taxonomies",
        "**/*/*/users",
      ],
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'International Quidditch Association',
        short_name: 'IQASport',
        start_url: '/',
        background_color: `#f4efef`,
        theme_color: `#72ba6b`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `favicon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
