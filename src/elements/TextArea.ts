import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { transitionProperty } from 'elements/cssHelpers'

const { borderRadiusPx: bR, unit } = layout

type TextAreaProps = {
	fontFamily?: 'Monospace'
	roundBottomLeftCorner?: boolean
}

const TextArea = styled.textarea<TextAreaProps>`
	border-radius: 0 ${bR} ${bR} 0;
	resize: none;
	width: 100%;
	height: 450px;
	border: none;
	padding: ${unit * 2}px;
	margin: 0px;
	height: calc(100vh - 190px);
	max-height: 800px;

	${transitionProperty('background-color')}

	::-webkit-scrollbar {
		width: ${unit * 1.5}px;
		border-radius: ${bR};
		scroll-behavior: smooth !important;
	}


	${({ theme, fontFamily, roundBottomLeftCorner }) => css`
		${
			roundBottomLeftCorner
				? `border-radius: 0 ${bR} ${bR} ${bR};`
				: `border-radius: 0 ${bR} ${bR} 0;`
		}
		background-color: ${theme.primary};
		::-webkit-scrollbar-track {
			border-radius: ${bR};
			background: ${theme.primary};
		}
		::-webkit-scrollbar-thumb {
			background: ${theme.tertiary};
			border-radius: ${bR};
		}
		${
			fontFamily === 'Monospace'
				? `font-family: monospace, monospace;`
				: `font-family: inherit;`
		}
	`}
`

export default TextArea
