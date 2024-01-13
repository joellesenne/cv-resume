import { FooterStyled } from './styled/FooterStyled'
import Skills from './modules/Skills'

export default function Footer() {
    const skills = ['Photographie', 'PAO', 'Musculation', 'Voyage']
    return (
        <FooterStyled>
            <h2>Centres d’intérêts</h2>
            <hr />
            <Skills lists={skills} />
        </FooterStyled>
    )
}
