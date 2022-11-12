import React from 'react'
import { GlobalStyles } from '../theme/globalStyle'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

class NotFoundPage extends React.Component {
  render() {

    return (
      <>
        <GlobalStyles />
        <Layout>
          <Seo title='404: Not found' />
          <article>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn't exist... the sadness.</p>
          </article>
        </Layout>
      </>
    )
  }
}

export default NotFoundPage
