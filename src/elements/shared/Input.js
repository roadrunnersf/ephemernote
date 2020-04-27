import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { outputBorderRadius, transitionProperty } from 'elements/cssHelpers'

const { unit } = layout

const Input = styled.input`
	box-sizing: border-box;
	padding: ${unit}px;
	${transitionProperty('background-color ')}
	flex: 1 1 auto;
	min-width: 1px;

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
		${
			!show &&
			css`
				min-width: 0px;
				max-width: 0px;
			`
		}
		}
	`}
`

export default Input
