import React from 'react'
import { GlobalStyles } from '../theme/globalStyle'

import Layout from '../components/Layout'
import Article from '../components/Article'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <>
			<GlobalStyles />
      <Layout>
        <Seo title="CV" />
        <Article />
      </Layout>
    </>
  )
}

export default IndexPage
