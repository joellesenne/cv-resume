import { graphql, useStaticQuery } from "gatsby"
export default function useSiteMetadata() {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
					description
					author
					url
					image
					lang
				}
			}
		}
	`)
	return data.site.siteMetadata
}
