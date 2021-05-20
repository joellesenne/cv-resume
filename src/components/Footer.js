import React from 'react'

import Skills from './Skills'

const skills = ['Photographie', 'PAO', 'Vélo', 'Boxe']

const Footer = () => (
  <footer className='footer'>
    <h2>Centres d'intérêts</h2>
    <hr />
    <Skills lists={skills} />
  </footer>
)

export default Footer
