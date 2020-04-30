import { calculateNextColor } from 'store/app/utils'
import { AppState, AppActionTypes, CYCLE_THEME_COLOR } from './types'

//action creators

export const cycleThemeColor = (): AppActionTypes => ({
	type: CYCLE_THEME_COLOR,
})

// reducer

export const initialState: AppState = {
	themeColor: 'seascape',
}

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
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
