import { NotesData } from 'store/notes/actionsAndTypes'

export const findIndexOfNoteWithID = (notesData: NotesData, idToFind: number) =>
	notesData.findIndex(({ id }) => id === idToFind)
