import { themeColorSchemes } from 'theme'
import { calculateNextColor } from './calculateNextColor'

describe('calculateNextColor', () => {
	it('Calculates the correct next color', () => {
		const colorsList = Object.keys(themeColorSchemes)

		expect(calculateNextColor(colorsList[0])).toBe(colorsList[1])
		expect(calculateNextColor(colorsList[2])).toBe(colorsList[3])

		const colorsLength = colorsList.length
		const lastColorScheme = colorsList[colorsLength - 1]
		const firstColorScheme = colorsList[0]

		expect(calculateNextColor(lastColorScheme)).toBe(firstColorScheme)
	})
})
