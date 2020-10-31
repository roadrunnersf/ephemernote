import appSlice, { initialState, cycleThemeColor } from 'store/app'
import { calculateNextColor } from 'store/app/utils'

const { reducer } = appSlice

describe('store/app', () => {
	describe('appReducer', () => {
		it('should handle CYCLE_THEME_COLOR', () => {
			const expectedState = {
				...initialState,
				themeColor: calculateNextColor(initialState.themeColor),
			}

			expect(reducer(initialState, cycleThemeColor())).toEqual(
				expectedState
			)
		})
	})
})
