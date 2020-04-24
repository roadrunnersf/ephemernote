import { createGlobalStyle } from 'styled-components'
import { layout } from 'theme'

const { unit } = layout

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0px;
		padding: 0px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
		font-size: ${unit * 2.5}px;
		
		line-height: 1.4;

		background-color: ${p => p.theme.background};
		color: ${p => p.theme.text};
	}
	button, textarea, input {
		color: inherit;
		font: inherit;
		font-size: inherit;
		font-stretch: normal;
		border: none;
		box-shadow: none;
		:focus {
			outline: 0;
		}
	}

	textarea {
		cursor: auto;
	}
`

export default GlobalStyle
