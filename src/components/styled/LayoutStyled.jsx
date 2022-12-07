// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components'

export const LayoutStyled = styled.main`
  max-width: 60%;
  @media (max-width: 1200px) {
	max-width: 89%;
  }
  @media (max-width: 768px) {
	max-width: 100%;
	}
	margin: 0 auto;
	font-weight: 400;
	color: var(--colorPrimary);

	background: var(--colorWhite);
	border-radius: 5px;
	box-shadow:
		0 2px 1px rgba(0, 0, 0, 0.09),
		0 4px 2px rgba(0, 0, 0, 0.09),
		0 8px 4px rgba(0, 0, 0, 0.09),
		0 16px 8px rgba(0, 0, 0, 0.09),
		0 32px 16px rgba(0, 0, 0, 0.09);
	&:before {
		content: '';
		display: block;

		height: 5px;

		border-radius: 5px 5px 0 0;
		background: linear-gradient(0.25turn,
		var(--colorSecondary),
		var(--colorPrimary));
		background-size: 300% 300%;
		animation: gradientRotate 10s ease alternate infinite;
	}
`;
