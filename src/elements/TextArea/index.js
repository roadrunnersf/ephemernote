import styled, { css } from 'styled-components'
import { layout } from 'theme'

const { borderRadius: bR, unit } = layout

export const TextArea = styled.textarea`
	border-radius: 0 ${bR} ${bR} 0;
	resize: none;
	width: 100%;
	height: 150px;
	border: none;
	padding: ${unit}px;

	${({ theme }) => `
		background-color: ${theme.primary};
		`}

	${p =>
		p.fontFamily === 'Monospace'
			? css`
					font-family: monospace, monospace;
			  `
			: css`
					font-family: inherit;
			  `}
`

export const TabButton = styled.button`
	-webkit-transition: background-color 250ms;
	-moz-transition: background-color 250ms;
	-o-transition: background-color 250ms;

	transition: background-color 250ms;
	border: none;
	height: ${unit * 3}px;
	border-radius: ${bR} ${bR} 0 0;

	${p =>
		p.active
			? `background-color: ${p.theme.primary};`
			: `background-color: ${p.theme.secondary};`}
`
