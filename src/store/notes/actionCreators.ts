import {
	NotesActionTypes,
	UPDATE_CURRENT_NOTE_ID,
	UPDATE_CURRENT_NOTE_TEXT,
	CYCLE_CURRENT_NOTE_FONT_FAMILY,
	CREATE_NEW_NOTE,
	DELETE_CURRENT_NOTE,
	SET_ADD_NOTE_INPUT_VALUE,
	TOGGLE_SHOW_ADD_NOTE_INPUT,
} from 'store/notes/actionsAndTypes'

export const updateCurrentNoteID = (id: number): NotesActionTypes => ({
	type: UPDATE_CURRENT_NOTE_ID,
	id,
})
export const updateCurrentNoteText = (text: string): NotesActionTypes => ({
	type: UPDATE_CURRENT_NOTE_TEXT,
	text,
})

export const cycleCurrentNoteFontFamily = (): NotesActionTypes => ({
	type: CYCLE_CURRENT_NOTE_FONT_FAMILY,
})

export const createNewNote = (): NotesActionTypes => ({
	type: CREATE_NEW_NOTE,
})
export const deleteCurrentNote = (): NotesActionTypes => ({
	type: DELETE_CURRENT_NOTE,
})

export const setAddNoteInputValue = (newString: string): NotesActionTypes => ({
	type: SET_ADD_NOTE_INPUT_VALUE,
	newString,
})

export const toggleShowAddNoteInput = (): NotesActionTypes => ({
	type: TOGGLE_SHOW_ADD_NOTE_INPUT,
})
