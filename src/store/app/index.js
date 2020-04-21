import { calculateNextColor } from './utils'

// actions

const CYCLE_THEME_COLOR = 'Cycle theme color'
// const SHOW_ADD_NOTE_INPUT = 'Show add note input'

//action creators
export const cycleThemeColor = () => ({
	type: CYCLE_THEME_COLOR,
})
// export const showAddNoteInput = () => ({
// 	type: SHOW_ADD_NOTE_INPUT,
// })

// reducer

const initialState = {
	themeColor: 'mint',
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case CYCLE_THEME_COLOR:
			return {
				...state,
				themeColor: calculateNextColor(state.themeColor),
			}
		// case SHOW_ADD_NOTE_INPUT:
		// 	return {
		// 		...state,
		// 		showAddNoteInput: false,
		// 	}
		// case HIDE_ADD_NOTE_INPUT:
		// 	return {
		// 		...state,
		// 		showAddNoteInput: true,
		// 	}
		default:
			return state
	}
}

// utils
