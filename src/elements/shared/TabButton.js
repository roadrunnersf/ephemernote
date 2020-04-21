import styled, { css } from 'styled-components'

import { layout } from 'theme'
import { transitionProperty } from 'elements/cssHelpers'

const { borderRadiusPx: bR, unit } = layout

export const TabButton = styled.button`
	${transitionProperty('background-color')}
	padding: ${unit * 0.75}px ${unit}px;
	border-radius: ${bR};

	${({ active, theme, rounding }) =>
		css`
			${
				active
					? `background-color: ${theme.primary};`
					: `background-color: ${theme.secondary};`
			}
			${rounding === 'top' && `border-radius: ${bR} ${bR} 0 0;`}
			${rounding === 'bottom' && `border-radius: 0 0 ${bR} ${bR};`}
		`}
`
