import { ArticleStyled } from './styled/ArticleStyled'

import Competences from './modules/Competences'
import Experiences from './modules/Experiences'
import Training from './modules/Training'

export default function Article() {
    return (
        <ArticleStyled>
            <Competences />
            <Experiences />
            <Training />
        </ArticleStyled>
    );
}
