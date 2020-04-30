import { NotesData } from 'store/notes/actionsAndTypes'

export const findNewNoteID = (notesData: NotesData) => {
	if (notesData.length === 0) {
		return 0
	}

	const idList = notesData.map(({ id }) => id)

	return Math.max(...idList) + 1
}
