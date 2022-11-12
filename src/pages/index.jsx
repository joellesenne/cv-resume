import React from 'react'
import { GlobalStyles } from '../theme/globalStyle'

import Layout from '../components/Layout'
import Article from '../components/Article'
import Seo from '../components/Seo'

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Layout>
          <Seo title='CV' />
          <Article />
        </Layout>
      </>
    )
  }
}

export default IndexPage
