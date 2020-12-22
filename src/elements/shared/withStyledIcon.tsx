import React from 'react'
import styled, { css } from 'styled-components'

import { transitionProperty } from 'elements/cssHelpers'
import { layout } from 'theme'

const { unit } = layout

type Props = {
	title: string
}

const withStyledIcon: TSFixMe = (Icon: React.FC) => {
	const StyledIcon = styled(Icon)`
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

	const IconWithTitle: React.FC<Props> = ({ title, ...rest }) => (
		<div title={title}>
			<StyledIcon {...rest} />
		</div>
	)

	return IconWithTitle
}

export default withStyledIcon
