import { NotesData } from 'store/notes/actionsAndTypes'

export const findNewCurrentNoteIdOnDelete = (
	notesData: NotesData,
	indexOfCurrentNote: number
) => {
	const notesDataLength = notesData.length

	if (indexOfCurrentNote === notesDataLength - 1) {
		return notesData[indexOfCurrentNote - 1].id
	}

	return notesData[indexOfCurrentNote + 1].id
}
