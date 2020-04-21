import produce from 'immer'

import { findIndexOfNoteWithID } from 'utils'
import { findNewNoteID, canCreateTab } from 'store/notes/utils'
import { initialState } from './initialState'

// actions

const UPDATE_CURRENT_NOTE_ID = 'Update current note ID'
const UPDATE_CURRENT_NOTE_TEXT = 'Update current note text'
const CREATE_NEW_TAB = 'Create new tab'
const SET_ADD_TAB_VALUE = 'Set add tab value'

//action creators
export const updateCurrentNoteID = id => ({
	type: UPDATE_CURRENT_NOTE_ID,
	id,
})

export const updateCurrentNoteText = text => ({
	type: UPDATE_CURRENT_NOTE_TEXT,
	text,
})

export const createNewTab = () => ({
	type: CREATE_NEW_TAB,
})

export const setAddTabValue = newString => ({
	type: SET_ADD_TAB_VALUE,
	newString,
})

// reducer

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CURRENT_NOTE_TEXT:
			return produce(state, draftState => {
				const indexOfCurrentNote = findIndexOfNoteWithID(
					draftState.data,
					draftState.currentNoteID
				)

				draftState.data[indexOfCurrentNote].text = action.text
			})

		case UPDATE_CURRENT_NOTE_ID:
			return produce(state, draftState => {
				draftState.currentNoteID = action.id
			})

		case CREATE_NEW_TAB:
			const notesData = state.data
			const newTitle = state.addTabValue
			const notesSortIndexList = notesData.map(
				({ sortIndex }) => sortIndex
			)

			if (!canCreateTab(notesData, newTitle)) {
				return state
			}

			const newNoteID = findNewNoteID(notesData)
			const newNoteSortIndex = Math.max(...notesSortIndexList) + 1

			return produce(state, draftState => {
				draftState.data.push(
					newNoteShape({
						title: newTitle,
						id: newNoteID,
						sortIndex: newNoteSortIndex,
					})
				)
				draftState.currentNoteID = newNoteID
				draftState.addTabValue = ''
			})

		case SET_ADD_TAB_VALUE:
			return produce(state, draftState => {
				draftState.addTabValue = action.newString
			})

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
