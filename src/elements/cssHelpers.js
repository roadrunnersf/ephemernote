import { css } from 'styled-components'
import { layout } from 'theme'

const { borderRadiusPx: bR, transitionTime } = layout

export const outputBorderRadius = side => {
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

export const transitionProperty = property => css`
	-webkit-transition: ${property} ${transitionTime};
	-moz-transition: ${property} ${transitionTime};
	-o-transition: ${property} ${transitionTime};
	transition: ${property} ${transitionTime};
`
