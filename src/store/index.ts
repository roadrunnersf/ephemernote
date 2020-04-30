import { createStore, combineReducers, compose } from 'redux'
import appReducer from 'store/app'
import notesReducer from 'store/notes'
import { loadState, saveState } from 'store/localStorage'

import throttle from 'lodash/throttle'

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
