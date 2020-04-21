import produce from 'immer'
import { calculateNextColor } from './utils'

//

// actions

const CYCLE_THEME_COLOR = 'Cycle theme color'

//action creators
export const cycleThemeColor = () => ({
	type: CYCLE_THEME_COLOR,
})

// reducer

const initialState = { themeColor: 'seascape' }

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case CYCLE_THEME_COLOR:
			return produce(state, draftState => {
				console.log(calculateNextColor(draftState.themeColor))
				// fooooooooooooooooooooooooooooo
				draftState.themeColor = calculateNextColor(
					draftState.themeColor
				)
			})

		default:
			return state
	}
}

// utils
