import { css } from 'styled-components'
import { layout } from 'theme'

const { borderRadiusPx: bR, transitionTime } = layout

export type BorderSide = 'top' | 'right' | 'bottom' | 'left'

export const outputBorderRadius = (side: BorderSide) => {
	switch (side) {
		case 'top':
			return `border-radius: ${bR} ${bR} 0 0;`
		case 'right':
			return `border-radius: 0 ${bR} ${bR} 0;`
		case 'bottom':
			return `border-radius: 0 0 ${bR} ${bR};`
		case 'left':
			return `border-radius: ${bR} 0 0 ${bR};`
		default:
			return ';'
	}
}

export const transitionProperty = (
	property: string,
	inputTime = transitionTime
) => css`
	-webkit-transition: ${property} ${inputTime};
	-moz-transition: ${property} ${inputTime};
	-o-transition: ${property} ${inputTime};
	transition: ${property} ${inputTime};
`
