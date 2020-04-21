import { createStore, combineReducers } from 'redux'
import { appReducer } from 'store/app'
import { notesReducer } from 'store/notes'

const rootReducer = combineReducers({
	app: appReducer,
	notes: notesReducer,
})

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__?.()
)
