import { calculateNextColor } from 'store/app/utils'

// actions

export const CYCLE_THEME_COLOR = 'Cycle theme color'

//action creators

export const cycleThemeColor = () => ({
	type: CYCLE_THEME_COLOR,
})

// reducer

export const initialState = {
	themeColor: 'mint',
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case CYCLE_THEME_COLOR:
			return {
				...state,
				themeColor: calculateNextColor(state.themeColor),
			}
		default:
			return state
	}
}

export default appReducer
