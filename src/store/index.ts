import { configureStore } from '@reduxjs/toolkit'
import throttle from 'lodash/throttle'

import appSlice from 'store/app'
import notesReducer from 'store/notes'
import { loadState, saveState } from 'store/localStorage'

import { AppState } from './app/index.d'
import { NotesState } from './notes/index.d'

declare global {
	type State = {
		app: AppState
		notes: NotesState
	}
}

const store = configureStore({
	reducer: {
		app: appSlice.reducer,
		notes: notesReducer,
	},
	preloadedState: loadState(),
})

store.subscribe(
	throttle(() => {
		const currentStoreState = {
			...store.getState(),
		}

		saveState(currentStoreState)
	}, 1500)
)

export default store
