import styled, { css } from 'styled-components'
import { layout } from 'theme'
import { outputBorderRadius, BorderSide } from 'elements/cssHelpers'

const { unit } = layout

type ButtonProps = {
	borderRadius: BorderSide
	show: boolean
	variant: 'primary' | 'secondary' | 'text' | 'background' | 'tertiary'
}

const Button = styled.button<ButtonProps>`
	padding: ${unit}px;

	${({ borderRadius, theme, show, variant = 'secondary' }) => css`
		${outputBorderRadius(borderRadius)}
		${!show && 'opacity: 0;'}
		
		background-color: ${theme[variant]}
	`}
`

export default Button
