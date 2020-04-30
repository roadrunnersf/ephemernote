export const UPDATE_CURRENT_NOTE_ID = 'Update current note ID'

export const UPDATE_CURRENT_NOTE_TEXT = 'Update current note text'
export const CYCLE_CURRENT_NOTE_FONT_FAMILY = 'Cycle current note fontFamily'

export const CREATE_NEW_NOTE = 'Create new note'
export const DELETE_CURRENT_NOTE = 'Delete current note'

export const SET_ADD_NOTE_INPUT_VALUE = 'Set add note input value'

export const TOGGLE_SHOW_ADD_NOTE_INPUT = 'Toggle show add note input'

type UpdateCurrentNoteIDAction = {
	type: typeof UPDATE_CURRENT_NOTE_ID
	id: number
}

type UpdateCurrentNoteTextAction = {
	type: typeof UPDATE_CURRENT_NOTE_TEXT
	text: string
}
type CycleCurrentNoteFontFamilyAction = {
	type: typeof CYCLE_CURRENT_NOTE_FONT_FAMILY
}
type CreateNewNoteAction = {
	type: typeof CREATE_NEW_NOTE
}
type DeleteCurrentNoteAction = {
	type: typeof DELETE_CURRENT_NOTE
}
type SetAddNoteInputValueAction = {
	type: typeof SET_ADD_NOTE_INPUT_VALUE
	newString: string
}
type ToggleShowAddNoteInputAction = {
	type: typeof TOGGLE_SHOW_ADD_NOTE_INPUT
}

export type NotesActionTypes =
	| UpdateCurrentNoteIDAction
	| UpdateCurrentNoteTextAction
	| CycleCurrentNoteFontFamilyAction
	| CreateNewNoteAction
	| DeleteCurrentNoteAction
	| SetAddNoteInputValueAction
	| ToggleShowAddNoteInputAction

export type Note = {
	id: number
	title: string
	text: string
	fontFamily: string | null
	sortIndex: number
}

export type NotesData = Note[]

export type NotesState = {
	currentNoteID: number
	data: NotesData
	showAddNoteInput: boolean
	addNoteInputValue: string
}
