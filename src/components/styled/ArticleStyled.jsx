import styled from 'styled-components'

export const ArticleStyled = styled.article`
  margin-block: 1rem;
  margin-inline: 1rem;
  padding-block-start: 0.2rem;
  padding-block-end: 1rem;
  padding-inline: 0.5rem;
  & .description {
    font-size: 2rem;
    font-weight: 700;
  }
  & .content {
    padding-block-end: 0.5rem;
    line-height: 1.5;
  }
  & .date {
    opacity: 0.6;
  }
  & .training {
    font-size: 2rem;
  }
`
