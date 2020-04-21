import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { outputBorderRadius, transitionProperty } from 'elements/cssHelpers'

const { borderRadiusPx: bR, unit } = layout

export const TextArea = styled.textarea`
	border-radius: 0 ${bR} ${bR} 0;
	resize: none;
	width: 100%;
	height: 450px;
	border: none;
	padding: ${unit * 2}px;
	margin: 0px;

	${transitionProperty('background-color')}

	::-webkit-scrollbar {
		width: ${unit * 1.5}px;
		border-radius: ${bR};
		scroll-behavior: smooth !important;
	}

	${({ theme, fontFamily }) => css`
		background-color: ${theme.primary};
		::-webkit-scrollbar-track {
			border-radius: ${bR};
			background: ${theme.primary};
		}
		::-webkit-scrollbar-thumb {
			background: ${theme.tertiary};
			border-radius: ${bR};
		}
		${fontFamily === 'Monospace'
			? `font-family: monospace, monospace;`
			: `font-family: inherit;`}
	`}
`
