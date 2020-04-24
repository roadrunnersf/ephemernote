import { createStore, combineReducers } from 'redux'
import appReducer from 'store/app'
import notesReducer from 'store/notes'
import { loadState, saveState } from 'store/localStorage'

import throttle from 'lodash/throttle'

const rootReducer = combineReducers({
	app: appReducer,
	notes: notesReducer,
})

const persistedState = loadState()

const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

store.subscribe(
	throttle(() => {
		const currentStoreState = {
			...store.getState(),
		}

		saveState(currentStoreState)
	}, 1500)
)

export default store
