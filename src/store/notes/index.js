import produce from 'immer'

import { findIndexOfNoteWithID } from 'utils'
import {
	findNewNoteID,
	canCreateNote,
	findNewCurrentNoteIdOnDelete,
} from 'store/notes/utils'
import initialState from './initialState'

import {
	UPDATE_CURRENT_NOTE_ID,
	UPDATE_CURRENT_NOTE_TEXT,
	CYCLE_CURRENT_NOTE_FONT_FAMILY,
	CREATE_NEW_NOTE,
	DELETE_CURRENT_NOTE,
	SET_ADD_NOTE_INPUT_VALUE,
	TOGGLE_SHOW_ADD_NOTE_INPUT,
} from 'store/notes/actions'

// reducer

const notesReducer = (state = initialState, action) => {
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
						const currentNoteFontFamily =
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

export default notesReducer
