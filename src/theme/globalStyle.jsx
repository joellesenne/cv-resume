import { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colorPrimary: #0e11a8;
		--colorSecondary: #00ffbc;
		--colorWhite: rgb(254, 254, 254);

		--duration: 0.2s;
	}
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none;
    }
  }
	html,
	body {
		width: 100%;
		vertical-align: baseline;
	}
	html {
		box-sizing: inherit;
    font-size: 62.5%;
    line-height: 1.15;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
	}

	body {
    margin: 0;
		padding: 2.5rem;
    max-width: inherit;
		font-family: 'Overpass', sans-serif;
    font-size: 1.8rem;
    line-height: 1.618;
		letter-spacing: 0.06rem;
    font-kerning: normal;
    font-feature-settings: "liga","kern";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		background: linear-gradient(
			0.25turn,
			var(--colorPrimary),
			var(--colorSecondary)
		);
		background-size: 300% 300%;
		animation: gradientRotate 15s ease alternate infinite;
	}
	hr {
		margin-block: 0.2rem;
		height: 2px;
		background-image: linear-gradient(
			to rig
			rgba(0, 0, 0, 0),
			var(--colorSecondary),
			rgba(0, 0, 0, 0)
		);
	}
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Teko', sans-serif;
    line-height: 1.1;
    font-weight: 400;
    color: inherit;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    text-transform: uppercase;
  }
	h2 {
		font-size: 1.5rem;
		opacity: 0.6;
	}
	h3 {
		font-size: 1.3rem;
	}
	h5 {
    text-transform: lowercase;
	}
  p {
    margin: 0;
    font-size: 1.25em;
  }
  a {
    display: inline;
    margin-block: 0.1rem;
    padding-block: 0.1rem;
    cursor: pointer;
    color: var(--colorPrimary);

    transition: color var(--duration) ease;
    &:hover {
      color: var(--colorSecondary);
    }

    &.email {
      grid-area: email;
    }

    &.phone {
      grid-area: phone;
    }
    &.site {
      grid-area: site;
    }
  }
	ul, ul > * + * {
    margin-block: 0.5rem;
	}
	li {
		display: inline-block;
		margin-inline-start: 0.5rem;
		padding-block: 0;
    padding-inline: 0.75rem;
		list-style: none;
		line-height: 2;
		font-weight: 700;
		border: var(--colorSecondary) solid 1px;
		border-radius: 15px;
		cursor: none;
		transition: all var(--duration) ease;
    &:hover {
      color: var(--colorWhite);
      background: linear-gradient(
              0.25turn,
              var(--colorPrimary),
              var(--colorSecondary)
      );
      background-size: 300% 300%;
      animation: gradientRotate 2s ease alternate infinite;
    }
	}
	img {
		max-width: 100%;
		object-position: center;
		opacity: 1;

		transition-delay: 500ms;
	}

	main > * + * {
		margin-block-start: 5rem;
	}
	footer, .content {
		margin-block: 1rem;
    margin-inline: 1rem;
    padding-block-start: 0.2rem;
    padding-block-end: 1rem;
    padding-inline: 0.5rem;
	}
  
	.training {
		padding-block-start: 0.5rem;
		line-height: 1.5;
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
