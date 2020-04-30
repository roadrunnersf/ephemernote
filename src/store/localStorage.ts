import { NotesState } from 'store/notes/actionsAndTypes'
import { AppState } from 'store/app/types'

type CombinedState = {
	app: AppState
	notes: NotesState
}

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) {
			return undefined
		}
		return JSON.parse(serializedState)
	} catch (err) {
		console.warn('There was an error loading state!!!')
		return undefined
	}
}

export const saveState = (state: CombinedState) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (err) {
		console.warn('There was an error saving state!!!')
	}
}
