import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { outputBorderRadius } from 'elements/cssHelpers'

const { unit } = layout

const Button = styled.button`
	padding: ${unit}px;

	${({ borderRadius, theme, show, variant = 'secondary' }) => css`
		${outputBorderRadius(borderRadius)}
		${!show && 'opacity: 0;'}
		
		background-color: ${theme[variant]}
	`}
`

export default Button
