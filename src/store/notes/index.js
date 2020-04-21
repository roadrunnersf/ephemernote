import produce from 'immer'

import { findIndexOfNoteWithID } from 'utils'
import { findNewNoteID, canCreateNote } from 'store/notes/utils'
import { initialState } from './initialState'

// actions

const UPDATE_CURRENT_NOTE_ID = 'Update current note ID'
const UPDATE_CURRENT_NOTE_TEXT = 'Update current note text'

const CREATE_NEW_NOTE = 'Create new note'

const SET_ADD_NOTE_INPUT_VALUE = 'Set add note input value'

const TOGGLE_SHOW_ADD_NOTE_INPUT = 'Toggle show add note input'
// const HIDE_ADD_NOTE_INPUT = 'Hide add note input'

//action creators
export const updateCurrentNoteID = id => ({
	type: UPDATE_CURRENT_NOTE_ID,
	id,
})
export const updateCurrentNoteText = text => ({
	type: UPDATE_CURRENT_NOTE_TEXT,
	text,
})

export const createNewNote = () => ({
	type: CREATE_NEW_NOTE,
})

export const setAddNoteInputValue = newString => ({
	type: SET_ADD_NOTE_INPUT_VALUE,
	newString,
})

export const toggleShowAddNoteInput = () => ({
	type: TOGGLE_SHOW_ADD_NOTE_INPUT,
})
// export const hideAddNoteInput = () => ({
// 	type: HIDE_ADD_NOTE_INPUT,
// })

// reducer

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CURRENT_NOTE_TEXT:
			const indexOfCurrentNote = findIndexOfNoteWithID(
				state.data,
				state.currentNoteID
			)

			return produce(state, draft => {
				draft.data[indexOfCurrentNote].text = action.text
			})

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
