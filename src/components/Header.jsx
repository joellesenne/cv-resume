import { HeaderStyled } from './styled/HeaderStyled'

export default function Header() {
    return (
        <HeaderStyled>
            <h1>Joël <br />Lesenne</h1>
            <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light'
            />
            <p>Développeur Web</p>
            <a className='email' href='mailto:contact@joellesenne.dev'>contact@joellesenne.dev</a>
            <a className='phone' href='tel:+33611578371'>+33 611 578 371</a>
            <a className='site' href='https://joellesenne.dev' target='_blank' rel='noopener noreferrer'>joellesenne.dev</a>
        </HeaderStyled>
    )
}
