import { createStore, combineReducers } from 'redux'
import { notesReducer } from 'state/notes'

const rootReducer = combineReducers({
	notes: notesReducer,
})

export const store = createStore(rootReducer)
