import appReducer, {
	initialState as state,
	CYCLE_THEME_COLOR,
	cycleThemeColor,
} from 'store/app'
import { calculateNextColor } from 'store/app/utils'

describe('store/app', () => {
	describe('actionCreators', () => {
		describe('cycleThemeColor', () => {
			it('should create an action to cycle the theme color', () => {
				const expectedAction = { type: CYCLE_THEME_COLOR }
				expect(cycleThemeColor()).toEqual(expectedAction)
			})
		})
	})

	describe('appReducer', () => {
		it('should return the initial state', () => {
			expect(appReducer(state, {})).toEqual(state)
			expect(appReducer(undefined, {})).toEqual(state)
		})
		it('should handle CYCLE_THEME_COLOR', () => {
			const expectedState = {
				...state,
				themeColor: calculateNextColor(state.themeColor),
			}

			expect(appReducer(state, cycleThemeColor())).toEqual(expectedState)
		})
	})
})
