import React from 'react'
import Avatar from 'avataaars'


import { HeaderStyled } from './styled/HeaderStyled'

class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <Avatar
          avatarStyle='Transparent'
          topType='ShortHairShortWaved'
          accessoriesType='Prescription02'
          hairColor='Black'
          facialHairType='BeardLight'
          facialHairColor='Black'
          clotheType='BlazerShirt'
          eyeType='Default'
          eyebrowType='Default'
          mouthType='Twinkle'
          skinColor='Light'
        />

        <h1>Joël <br />Lesenne</h1>
        <p>Développeur Web</p>
        <a className='email' href='mailto:contact@joellesenne.dev'>contact@joellesenne.dev</a>
        <a className='phone' href='tel:+33611578371'>+33 611 578 371</a>
        <a className='site' href='https://joellesenne.dev' target='_blank' rel='noopener noreferrer'>joellesenne.dev</a>
      </HeaderStyled>
    )
  }
}

export default Header
