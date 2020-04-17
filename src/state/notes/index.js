import produce from 'immer'

import { findIndexOfNoteWithID } from 'utils'
import { findNewNoteID, canCreateTab } from 'state/utils'

//actions
const UPDATE_CURRENT_NOTE_ID = 'UPDATE_CURRENT_NOTE_ID'
const UPDATE_CURRENT_NOTE_TEXT = 'UPDATE_CURRENT_NOTE_TEXT'
const CREATE_NEW_TAB = 'CREATE_NEW_TAB'
const SET_ADD_TAB_VALUE = 'SET_ADD_TAB_VALUE'

//action creators
export const updateCurrentNoteID = id => ({
	type: UPDATE_CURRENT_NOTE_ID,
	id,
})

export const updateCurrentNoteText = (id, text) => ({
	type: UPDATE_CURRENT_NOTE_TEXT,
	id,
	text,
})

export const createNewTab = () => ({
	type: CREATE_NEW_TAB,
})

export const setAddTabValue = newString => ({
	type: SET_ADD_TAB_VALUE,
	newString,
})

// initialState

const initialState = {
	currentNoteID: 0,
	data: [
		{
			id: 0,
			title: 'default',
			text: 'Hello world!!!',
			fontFamily: 'Sans Serif',
			sortIndex: 0,
		},
		{
			id: 1,
			title: 'tab2',
			text: 'some other text',
			fontFamily: 'Monospace',
			sortIndex: 1,
		},
	],
	addTabValue: '',
}

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

			if (!canCreateTab(notesData, newTitle)) {
				return state
			}

			const newNoteID = findNewNoteID(notesData)
			const newNoteSortIndex = Math.max(...notesData)

			return produce(state, draftState => {
				draftState.data.push(
					newNoteShape({
						title: newTitle,
						id: newNoteID,
						sortIndex: newNoteSortIndex,
					})
				)
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

// other

const text = ''
const font = 'Sans Serif'

function newNoteShape({ title, id, sortIndex }) {
	return {
		id,
		title,
		sortIndex,
		text,
		font,
	}
}
