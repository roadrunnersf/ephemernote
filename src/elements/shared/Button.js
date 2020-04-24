import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { outputBorderRadius } from 'elements/cssHelpers'

const { unit } = layout

const Button = styled.button`
	padding: ${unit}px;

	${({ borderRadius, theme, variant = 'secondary' }) => css`
		${outputBorderRadius(borderRadius)}

		background-color: ${theme[variant]}
	`}
`

export default Button
