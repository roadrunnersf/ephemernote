import { createStore, combineReducers } from 'redux'
import { notesReducer } from 'store/notes'

const rootReducer = combineReducers({
	notes: notesReducer,
})

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__?.()
)
