import {
	UPDATE_CURRENT_NOTE_ID,
	UPDATE_CURRENT_NOTE_TEXT,
	CYCLE_CURRENT_NOTE_FONT_FAMILY,
	CREATE_NEW_NOTE,
	DELETE_CURRENT_NOTE,
	SET_ADD_NOTE_INPUT_VALUE,
	TOGGLE_SHOW_ADD_NOTE_INPUT,
} from 'store/notes/actionsAndTypes'

import {
	updateCurrentNoteID,
	updateCurrentNoteText,
	cycleCurrentNoteFontFamily,
	createNewNote,
	deleteCurrentNote,
	setAddNoteInputValue,
	toggleShowAddNoteInput,
} from 'store/notes/actionCreators'

describe('store/notes/actionCreators', () => {
	describe('updateCurrentNoteID', () => {
		it('should create an action to update the current note ID', () => {
			const id = 555
			const expectedAction = { id, type: UPDATE_CURRENT_NOTE_ID }

			expect(updateCurrentNoteID(id)).toEqual(expectedAction)
		})
	})
	describe('updateCurrentNoteText', () => {
		it('should create an action to update the current note text', () => {
			const text = 'hello hello'
			const expectedAction = { text, type: UPDATE_CURRENT_NOTE_TEXT }

			expect(updateCurrentNoteText(text)).toEqual(expectedAction)
		})
	})
	describe('cycleCurrentNoteFontFamily', () => {
		it('should create an action to update cycle the fontFamily of the current note', () => {
			const expectedAction = { type: CYCLE_CURRENT_NOTE_FONT_FAMILY }

			expect(cycleCurrentNoteFontFamily()).toEqual(expectedAction)
		})
	})
	describe('createNewNote', () => {
		it('should create an action to create a new note', () => {
			const expectedAction = { type: CREATE_NEW_NOTE }

			expect(createNewNote()).toEqual(expectedAction)
		})
	})
	describe('deleteCurrentNote', () => {
		it('should create an action to delete the current note', () => {
			const expectedAction = { type: DELETE_CURRENT_NOTE }

			expect(deleteCurrentNote()).toEqual(expectedAction)
		})
	})
	describe('setAddNoteInputValue', () => {
		it('should create an action to set the input value of the new note', () => {
			const newString = 'TestNoteTitle'
			const expectedAction = { type: SET_ADD_NOTE_INPUT_VALUE, newString }

			expect(setAddNoteInputValue(newString)).toEqual(expectedAction)
		})
	})
	describe('toggleShowAddNoteInput', () => {
		it('should create an action to toggle showing the add note input', () => {
			const expectedAction = { type: TOGGLE_SHOW_ADD_NOTE_INPUT }

			expect(toggleShowAddNoteInput()).toEqual(expectedAction)
		})
	})
})
