import {
	UPDATE_CURRENT_NOTE_ID,
	UPDATE_CURRENT_NOTE_TEXT,
	CYCLE_CURRENT_NOTE_FONT_FAMILY,
	CREATE_NEW_NOTE,
	DELETE_CURRENT_NOTE,
	SET_ADD_NOTE_INPUT_VALUE,
	TOGGLE_SHOW_ADD_NOTE_INPUT,
} from 'store/notes/actions'

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
