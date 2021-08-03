import React from 'react'

import Skills from './modules/Skills'

const skills = ['Photographie', 'PAO', 'Vélo', 'Boxe']

const Footer = () => (
  <footer>
    <h2>Centres d'intérêts</h2>
    <hr />
    <Skills lists={skills} />
  </footer>
)

export default Footer
