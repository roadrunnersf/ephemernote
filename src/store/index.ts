import { createStore, combineReducers, compose } from 'redux'
import throttle from 'lodash/throttle'

import appReducer from 'store/app'
import notesReducer from 'store/notes'
import { loadState, saveState } from 'store/localStorage'

import { NotesState } from 'store/notes/actionsAndTypes'
import { AppState } from 'store/app/types'

declare global {
	type State = {
		app: AppState
		notes: NotesState
	}
}

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}
const rootReducer = combineReducers({
	app: appReducer,
	notes: notesReducer,
})

const persistedState = loadState()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, persistedState, composeEnhancers())

store.subscribe(
	throttle(() => {
		const currentStoreState = {
			...store.getState(),
		}

		saveState(currentStoreState)
	}, 1500)
)

export default store
