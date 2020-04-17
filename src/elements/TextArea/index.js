import styled, { css } from 'styled-components'

export const TextArea = styled.textarea`
	background-color: papayawhip;
	resize: none;
	width: 300px;
	height: 150px;
	font-family: 'Open Sans', sans-serif;
	${props =>
		props.fontFamily === 'Monospace' &&
		css`
			font-family: monospace, monospace;
		`};
	${props =>
		props.fontFamily === 'Sans Serif' &&
		css`
			font-family: 'Open Sans', sans-serif;
		`};
`
