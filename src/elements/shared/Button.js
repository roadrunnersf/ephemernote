import styled from 'styled-components'
import { layout } from 'theme'
import { whichBorderRadius } from 'elements/cssHelpers'

const { unit } = layout

export const Button = styled.button`
	padding: ${unit}px;

	${({ borderRadius }) => whichBorderRadius(borderRadius)}
	${({ theme }) => `background-color: ${theme.secondary};`}
	${({ theme, variant }) => variant && `background-color: ${theme[variant]}`}
`
