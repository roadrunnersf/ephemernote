import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0px;
		padding: 0px;
    font-family: 'Roboto';
    font-size: 16px;
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
`
