import styled, { css } from 'styled-components'

import { transitionProperty } from 'elements/cssHelpers'
import { layout } from 'theme'

const { unit } = layout

const Icon = styled.div`
	${({ theme }) => css`
		color: ${theme.tertiary};
		margin-right: ${unit}px;
		${transitionProperty('color')}

		:hover {
			color: ${theme.primary};
		}
	`}
`

export default Icon
