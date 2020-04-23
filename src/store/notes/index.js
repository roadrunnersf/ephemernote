import produce from 'immer'

import { findIndexOfNoteWithID } from 'utils'
import {
	findNewNoteID,
	canCreateNote,
	findNewCurrentNoteIdOnDelete,
} from 'store/notes/utils'
import { initialState } from './initialState'

// actions

const UPDATE_CURRENT_NOTE_ID = 'Update current note ID'

const UPDATE_CURRENT_NOTE_TEXT = 'Update current note text'
const CYCLE_CURRENT_NOTE_FONT_FAMILY = 'Cycle current note fontFamily'

const CREATE_NEW_NOTE = 'Create new note'
const DELETE_CURRENT_NOTE = 'Delete current note'

const SET_ADD_NOTE_INPUT_VALUE = 'Set add note input value'

const TOGGLE_SHOW_ADD_NOTE_INPUT = 'Toggle show add note input'

//action creators

export const updateCurrentNoteID = id => ({
	type: UPDATE_CURRENT_NOTE_ID,
	id,
})
export const updateCurrentNoteText = text => ({
	type: UPDATE_CURRENT_NOTE_TEXT,
	text,
})

export const cycleCurrentNoteFontFamily = () => ({
	type: CYCLE_CURRENT_NOTE_FONT_FAMILY,
})

export const createNewNote = () => ({
	type: CREATE_NEW_NOTE,
})
export const deleteCurrentNote = () => ({
	type: DELETE_CURRENT_NOTE,
})

export const setAddNoteInputValue = newString => ({
	type: SET_ADD_NOTE_INPUT_VALUE,
	newString,
})

export const toggleShowAddNoteInput = () => ({
	type: TOGGLE_SHOW_ADD_NOTE_INPUT,
})

// reducer

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CURRENT_NOTE_TEXT:
		case DELETE_CURRENT_NOTE:
		case CYCLE_CURRENT_NOTE_FONT_FAMILY:
			const indexOfCurrentNote = findIndexOfNoteWithID(
				state.data,
				state.currentNoteID
			)
			// eslint-disable-next-line default-case
			switch (action.type) {
				case UPDATE_CURRENT_NOTE_TEXT:
					return produce(state, draft => {
						draft.data[indexOfCurrentNote].text = action.text
					})
				case DELETE_CURRENT_NOTE:
					if (state.data.length > 1) {
						return produce(state, draft => {
							draft.currentNoteID = findNewCurrentNoteIdOnDelete(
								state.data,
								indexOfCurrentNote
							)
							draft.data.splice(indexOfCurrentNote, 1)
						})
					} else {
						return state
					}
				case CYCLE_CURRENT_NOTE_FONT_FAMILY:
					return produce(state, draft => {
						let currentNoteFontFamily =
							draft.data[indexOfCurrentNote].fontFamily
						const newFont = currentNoteFontFamily
							? null
							: 'Monospace'

						draft.data[indexOfCurrentNote].fontFamily = newFont
					})
			}
			break

		case UPDATE_CURRENT_NOTE_ID:
			return {
				...state,
				currentNoteID: action.id,
			}

		case CREATE_NEW_NOTE:
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

			return produce(state, draft => {
				draft.data.push(
					newNoteShape({
						title: newTitle,
						id: newNoteID,
						sortIndex: newNoteSortIndex,
					})
				)
				draft.currentNoteID = newNoteID
				draft.showAddNoteInput = false
				draft.addNoteInputValue = ''
			})

		case SET_ADD_NOTE_INPUT_VALUE:
			return {
				...state,
				addNoteInputValue: action.newString,
			}

		case TOGGLE_SHOW_ADD_NOTE_INPUT:
			return {
				...state,
				showAddNoteInput: !state.showAddNoteInput,
			}

		default:
			return state
	}
}

// templates

const text = ''
const font = null

function newNoteShape({ title, id, sortIndex }) {
	return {
		id,
		title,
		sortIndex,
		text,
		font,
	}
}
