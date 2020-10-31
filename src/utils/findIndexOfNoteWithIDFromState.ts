import { NotesState } from 'store/notes/index.d'

export const findIndexOfNoteWithIDFromState = (notesState: NotesState) =>
	notesState.data.findIndex(({ id }) => id === notesState.currentNoteID)
