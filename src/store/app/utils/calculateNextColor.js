import { themeColorSchemes } from 'theme'

export const calculateNextColor = currentColor => {
	const colorNames = Object.keys(themeColorSchemes)

	const indexOfCurrentColor = colorNames.indexOf(currentColor)

	const indexOfFinalColor =
		indexOfCurrentColor + 1 === colorNames.length
			? 0
			: indexOfCurrentColor + 1

	return colorNames[indexOfFinalColor]
}
