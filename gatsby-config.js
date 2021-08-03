const config = require('./config/site')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env);

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		title: config.siteTitle,
		description: config.siteDescription,
		author: config.siteAuthor,
		url: config.siteUrl + pathPrefix,
		image: config.siteImage,
		alt: config.siteImageAlt,
		lang: config.siteLang
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://cv.joellesenne.dev',
				sitemap: 'https://cv.joellesenne.dev/sitemap.xml',
				env: {
					development: {
						policy: [{ userAgent: '*', disallow: ['/'] }]
					},
					production: {
						policy: [{ userAgent: '*', allow: '/' }]
					}
				}
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GA_TRACKING_ID,
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.siteTitle,
				short_name: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'fullscreen',
				icon: 'src/images/logo.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
	],
}
