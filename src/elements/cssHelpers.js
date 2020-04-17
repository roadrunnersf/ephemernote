import { layout } from 'theme'

const { borderRadiusPx: bR } = layout

export const whichBorderRadius = side => {
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
