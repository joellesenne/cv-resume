import React from 'react'
import { ArticleStyled } from './styled/ArticleStyled'

import Competences from './modules/Competences'
import Experiences from './modules/Experiences'
import Training from './modules/Training'

class Article extends React.Component {
  render() {
    return (
      <ArticleStyled>
        <Competences />
        <Experiences />
        <Training />
      </ArticleStyled>
    )
  }
}

export default Article
