import styled, { css } from 'styled-components'
import { layout } from 'theme'
import {
	outputBorderRadius,
	transitionProperty,
	BorderSide,
} from 'elements/cssHelpers'

const { unit } = layout

type InputProps = {
	borderRadius: BorderSide
	show: boolean
}

const Input = styled.input<InputProps>`
	box-sizing: border-box;
	padding: ${unit}px;
	${transitionProperty('background-color ')}
	flex: 1 1 auto;
	min-width: 1px;

	${({ theme, borderRadius, show = true }) => css`
		${outputBorderRadius(borderRadius)}
		background-color: ${theme.primary};
		:focus {
			background-color: ${theme.secondary};
		}
		::placeholder {
			color: ${theme.text};
			opacity: 1;
		}
		${
			!show &&
			css`
				opacity: 0;
				min-width: 0px;
				max-width: 0px;
			`
		}
		}
	`}
`

export default Input
