require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  pathPrefix: "/ruminations",
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Vijeth P H`,
    // Default title of the page
    siteTitleAlt: `Vijeth P H - Personal Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Vijeth P H - Personal Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://vijethph.github.io/ruminations`,
    // Used for SEO
    siteDescription: `Personal Blog of Vijeth P H`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/vijethph`,
          },
          {
            name: `Linkedin`,
            url: `https://linkedin.com/in/vijethph1999`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vijeth P H - Personal Blog`,
        short_name: `vijeths stuff`,
        description: `Personal Blog of Vijeth P H`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
