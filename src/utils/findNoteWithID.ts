import { NotesData } from 'store/notes/index.d'

export const findNoteWithID = (notesData: NotesData, id: number) =>
	notesData.find(note => note.id === id)
