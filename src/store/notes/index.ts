import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { findIndexOfNoteWithIDFromState } from 'utils'
import {
	findNewNoteID,
	canCreateNote,
	findNewCurrentNoteIdOnDelete,
} from 'store/notes/utils'
import initialState from './initialState'

import { Note } from 'store/notes/index.d'

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		updateCurrentNoteID(state, { payload }: PayloadAction<number>) {
			state.currentNoteID = payload
		},
		updateCurrentNoteText(state, { payload }: PayloadAction<string>) {
			const indexOfCurrentNote = findIndexOfNoteWithIDFromState(state)

			state.data[indexOfCurrentNote].text = payload
		},
		deleteCurrentNote(state) {
			if (state.data.length > 1) {
				const indexOfCurrentNote = findIndexOfNoteWithIDFromState(state)

				state.currentNoteID = findNewCurrentNoteIdOnDelete(
					state.data,
					indexOfCurrentNote
				)
				state.data.splice(indexOfCurrentNote, 1)
			}
		},
		cycleCurrentNoteFontFamily(state) {
			const indexOfCurrentNote = findIndexOfNoteWithIDFromState(state)

			const currentNoteFontFamily =
				state.data[indexOfCurrentNote].fontFamily
			const newFont = currentNoteFontFamily ? null : 'Monospace'

			state.data[indexOfCurrentNote].fontFamily = newFont
		},
		createNewNote(state) {
			const notesData = state.data
			const newTitle = state.addNoteInputValue
			const notesSortIndexList = notesData.map(
				({ sortIndex }) => sortIndex
			)

			if (!canCreateNote(notesData, newTitle)) {
				return state
			}

			const newNoteID = findNewNoteID(notesData)
			const newNoteSortIndex = Math.max(...notesSortIndexList) + 1

			notesData.push(
				newNoteShape({
					title: newTitle,
					id: newNoteID,
					sortIndex: newNoteSortIndex,
				})
			)

			state.currentNoteID = newNoteID
			state.showAddNoteInput = false
			state.addNoteInputValue = ''
		},
		setAddNoteInputValue(state, { payload }: PayloadAction<string>) {
			state.addNoteInputValue = payload
		},
		toggleShowAddNoteInput(state) {
			state.showAddNoteInput = !state.showAddNoteInput
		},
		closeAddNoteInput(state) {
			state.showAddNoteInput = false
		},
	},
})

const text = ''
const fontFamily = null

function newNoteShape({
	title,
	id,
	sortIndex,
}: {
	title: string
	id: number
	sortIndex: number
}): Note {
	return {
		id,
		title,
		sortIndex,
		text,
		fontFamily,
	}
}

const {
	reducer: notesReducer,
	actions: {
		closeAddNoteInput,
		createNewNote,
		cycleCurrentNoteFontFamily,
		deleteCurrentNote,
		setAddNoteInputValue,
		toggleShowAddNoteInput,
		updateCurrentNoteID,
		updateCurrentNoteText,
	},
} = notesSlice

export {
	closeAddNoteInput,
	createNewNote,
	cycleCurrentNoteFontFamily,
	deleteCurrentNote,
	setAddNoteInputValue,
	toggleShowAddNoteInput,
	updateCurrentNoteID,
	updateCurrentNoteText,
}

export default notesReducer
