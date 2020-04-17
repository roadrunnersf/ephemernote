import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { whichBorderRadius } from 'elements/cssHelpers'

const { unit } = layout

export const Input = styled.input`
	padding: ${unit}px;
	-webkit-transition: background-color 500ms;
	-moz-transition: background-color 500ms;
	-o-transition: background-color 500ms;
	transition: background-color 500ms;

	${({ borderRadius }) => whichBorderRadius(borderRadius)}
	${({ theme }) => css`
		background-color: ${theme.secondary};
		:focus {
			background-color: ${theme.primary};
		}
		::placeholder {
			color: ${theme.text};
			opacity: 1;
		}
	`}
`
// ${({ hasContent, theme }) =>
// 	hasContent &&
// 	css`
// 		:not(:focus) {
// 			background-color: ${theme.tertiary};
// 		}
// 	`}
