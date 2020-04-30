import { NotesData } from 'store/notes/actionsAndTypes'

export const findNoteWithID = (notesData: NotesData, id: number) =>
	notesData.find(note => note.id === id)
