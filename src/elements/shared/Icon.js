import mdiIcon from '@mdi/react'

import { mdiPalette } from '@mdi/js'

import styled, { css } from 'styled-components'

import { transitionProperty } from 'elements/cssHelpers'
import { layout } from 'theme'

const { unit } = layout

export const Icon = styled(mdiIcon)`
	${({ theme }) => css`
		color: ${theme.tertiary};
		margin-right: ${unit}px;
		${transitionProperty('color')}

		:hover {
			color: ${theme.primary};
		}
	`}
`
