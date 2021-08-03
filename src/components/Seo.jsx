import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import useSiteMetadata from "../hooks/use-site-metadata"

function Seo({meta}) {
	const {title, description, author, url, image, alt, lang} = useSiteMetadata()
	return (
		<Helmet
			defer={false}
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${author}`}
			meta={[
				{
					name: 'description',
					content: description,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: description,
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:url',
					content: url,
				},
				{
					property: 'og:image',
					content: image,
				},
				{
					property: 'og:image:alt',
					content: alt,
				},
				{
					property: 'og:locale',
					content: lang,
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
				{
					name: 'twitter:url',
					content: url,
				},
				{
					name: 'twitter:image',
					content: image,
				},
				{
					name: 'twitter:image:alt',
					content: alt,
				},
				{
					name: 'twitter:creator',
					content: author,
				},
				{
					name: 'twitter:title',
					content: title,
				},
				{
					name: 'twitter:description',
					content: description,
				},
			].concat(meta)}
		/>
	)
}

Seo.defaultProps = {
	lang: 'fr',
	meta: [],
	description: '',
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default Seo
