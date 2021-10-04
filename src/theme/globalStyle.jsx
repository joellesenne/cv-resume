import { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme';

export const GlobalStyles = createGlobalStyle`
	@media (prefers-reduced-motion: reduce) {
		* {
			animation: none;
		}
	}
	:root {
		--colorPrimary: #0e11a8;
		--colorSecondary: #00ffbc;
		--colorWhite: rgb(254, 254, 254);

		--duration: 0.2s;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
		border: 0;
	}

	html,
	body {
		width: 100%;
		vertical-align: baseline;
	}

	html {
		box-sizing: border-box;

		font-size: 100%;
		line-height: 1.85rem;
		text-rendering: optimizeLegibility;

		overflow-x: hidden;
		-ms-overflow-style: scrollbar;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		scroll-behavior: smooth;
	}

	body {
		padding: 2.5rem;

		font-family: 'Overpass', sans-serif;
		letter-spacing: 0.06rem;

		background: linear-gradient(
			0.25turn,
			var(--colorPrimary),
			var(--colorSecondary)
		);
		background-size: 300% 300%;
		animation: gradientRotate 15s ease alternate infinite;
	}

	a {
		margin: 0.1rem 0;
		padding: 0.1rem 0;

		color: var(--colorPrimary);

		transition: color var(--duration) ease;
	}

	a:hover {
		color: var(--colorSecondary);
	}

	a.email {
		grid-area: email;
	}

	a.phone {
		grid-area: phone;
	}

	a.site {
		grid-area: site;
	}

	hr {
		margin: 0.2rem 0;
		height: 2px;

		background-image: linear-gradient(
			to rig
			rgba(0, 0, 0, 0),
			var(--colorSecondary),
			rgba(0, 0, 0, 0)
		);
	}

	h2 {
		font-family: 'Teko', sans-serif;
		font-size: 0.8rem;
		line-height: 2.5;
		font-weight: 400;
		text-transform: uppercase;
		opacity: 0.6;
	}

	h3 {
		font-family: 'Teko', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		text-transform: uppercase;
	}

	h5 {
		font-size: 0.8rem;
	}
	ul {
		margin-top: 0.5rem;
	}
	ul > * + * {
		margin-top: 0.5rem;
	}

	li {
		display: inline-block;

		margin-right: 0.5rem;
		padding: 0 0.75rem;
		list-style: none;

		line-height: 2;
		font-weight: 700;

		border: var(--colorSecondary) solid 1px;
		border-radius: 15px;
		cursor: none;

		transition: all var(--duration) ease;
	}

	li:hover {
		color: var(--colorWhite);

		background: linear-gradient(
			0.25turn,
			var(--colorPrimary),
			var(--colorSecondary)
		);
		background-size: 300% 300%;

		animation: gradientRotate 2s ease alternate infinite;
	}

	img {
		width: 100%;
		height: 100%;
		object-position: center;
		opacity: 1;

		transition-delay: 500ms;
	}

	main > * + * {
		margin-top: 5rem;
	}

	footer {
		margin: 1rem;
		padding: 0.2rem 0.5rem 1rem;
	}

  .content {
		margin: 1rem;
		padding: 0.2rem 0.5rem 0.5rem;
		line-height: 1.5;
  }

	.description {
		font-size: 1.15rem;
		font-weight: 700;
	}

	.training {
		padding-top: 0.5rem;
		line-height: 1.5;
	}

	.date {
		opacity: 0.6;
	}


	@keyframes gradientRotate {
		0% {
			background-position: 0 50%;

		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
`
