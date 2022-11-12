import React from 'react'
import { FooterStyled } from './styled/FooterStyled'

import Skills from './modules/Skills'

const skills = ['Photographie', 'PAO', 'Vélo', 'Boxe']

class Footer extends React.Component {
  render() {
    return (
      <FooterStyled>
        <h2>Centres d'intérêts</h2>
        <hr />
        <Skills lists={skills} />
      </FooterStyled>
    )
  }
}

export default Footer
