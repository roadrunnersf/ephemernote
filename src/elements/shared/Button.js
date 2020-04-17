import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { whichBorderRadius } from 'elements/cssHelpers'

const { unit } = layout

export const Input = styled.button`
	padding: ${unit}px;

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
