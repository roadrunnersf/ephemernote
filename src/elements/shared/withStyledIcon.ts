import React from 'react'
import styled, { css } from 'styled-components'

import { transitionProperty } from 'elements/cssHelpers'
import { layout } from 'theme'

const { unit } = layout

const withStyledIcon: TSFixMe = (Icon: React.FC) => styled(Icon)`
	${({ theme }) => css`
		color: ${theme.tertiary};
		margin-right: ${unit}px;
		width: 30px;
		height: 30px;
		${transitionProperty('color')}

		:hover {
			color: ${theme.primary};
		}
	`}
`

export default withStyledIcon
