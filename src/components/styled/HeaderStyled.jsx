import styled from 'styled-components'

export const HeaderStyled = styled.header`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: auto;
	grid-template-areas: 'name name name picture picture' 'title title title picture picture' 'email email email . . ' 'site site site . . ' 'phone phone phone . . ';
  margin-block-start: 2rem;
  margin-block-end: 0;
  margin-inline: 1rem;
	padding-block: 0.5rem;
  padding-inline: 0.5rem;
	& picture {
    grid-area: picture;
    margin-block: 0;
    margin-block-start: 1rem;
    margin-inline-end: 0;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: 768px) {
      display: none;
    }
  }
  & h1 {
    grid-area: name;
    font-family: 'Chivo', sans-serif;
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  & p {
    grid-area: title;
    margin-block: 0.1rem;
    margin-inline: 0;
    padding-block: 0.1rem;
    padding-inline: 0;
    font-size: 2rem;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`
