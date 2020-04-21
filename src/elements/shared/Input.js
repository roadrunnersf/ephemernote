import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { outputBorderRadius, transitionProperty } from 'elements/cssHelpers'

const { unit } = layout

export const Input = styled.input`
	padding: ${unit}px;
	${transitionProperty('background-color ')}

	${({ theme, borderRadius, show = true }) => css`
		${outputBorderRadius(borderRadius)}
		background-color: ${theme.secondary};
		:focus {
			background-color: ${theme.primary};
		}
		::placeholder {
			color: ${theme.text};
			opacity: 1;
		}
		${!show && 'opacity: 0;'}
	`}
`
// ${({ hasContent, theme }) =>
// 	hasContent &&
// 	css`
// 		:not(:focus) {
// 			background-color: ${theme.tertiary};
// 		}
// 	`}
